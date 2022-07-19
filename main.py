from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import subprocess
from pydantic import BaseModel
import json
import re

secrets = ['semgrep', '--config' ,'p/secrets']
bsa = ['semgrep','--config','p/owasp-top-ten']
full =['semgrep', '--config=auto']

class Repo(BaseModel):
    repo: str
    rule: str
    
app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pattern = "⋮┆----------------------------------------\\n\s\s\s\s\s[a-z]"

def runScan(repo):
    repository = repo.repo
    getRepo = subprocess.run(["git", "clone",repository.encode(),".test"],capture_output=True, text=True)
    if(repo.rule == "secrets"):
        result = subprocess.run(secrets, cwd='./.test',capture_output=True, text=True)
    elif(repo.rule == "bsa"):
        result = subprocess.run(bsa, cwd='./.test',capture_output=True, text=True)
    elif(repo.rule == "full"):
        result = subprocess.run(full, cwd='./.test',capture_output=True, text=True)
    subprocess.run(["rm","-rf",".test/"])
    data = result.stdout.split("Findings:")[1].strip().split("\n\n\n")
    finalData = []
    for value in data:
        strData = value[value.find('\n'):]
        elements = re.split(pattern, strData)
        issues=[]
        for element in elements:
            issues.append({
                "description":element[element.find('\n        ')+1:element.find("Details")].strip(),
                "details":element[element.find("Details"):].strip()
            })

        finalData.append({
            "file":value[0:value.find('\n')].strip(),
            "issues":issues
        })
    return finalData

@app.get("/")
async def root():
    return {"message": "Welcome to Dunder Mifflin OSS Inspector"}

@app.post("/scan/")
async def run_scan(repo: Repo):
    return {"results": runScan(repo)}