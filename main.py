import subprocess
import json
import re
import uuid
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

secrets = ['semgrep', '--config' ,'p/secrets']
bsa = ['semgrep','--config','p/owasp-top-ten']
full =['semgrep', '--config=auto']


pattern = "⋮┆----------------------------------------\\n\s\s\s\s\s[a-z]"

def runScan(repo):
    repository = repo['repo']
    fileName = "."+str(uuid.uuid1())
    fileDir = "./"+fileName+"/"
    getRepo = subprocess.run(["git", "clone",repository.encode(),fileName],capture_output=True, text=True)
    if(repo['rule'] == "secrets"):
        result = subprocess.run(secrets, cwd=fileDir,capture_output=True, text=True)
    elif(repo['rule'] == "bsa"):
        result = subprocess.run(bsa, cwd=fileDir,capture_output=True, text=True)
    elif(repo['rule'] == "full"):
        result = subprocess.run(full, cwd=fileDir,capture_output=True, text=True)
    subprocess.run(["rm","-rf",fileName])
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
def root():
    return {"message": "Welcome to Dunder Mifflin OSS Inspector"}

@app.post("/scan")
def run_scan():
    repo = request.json
    return {"results": runScan(repo=repo)}


if __name__ == '__main__':
    app.run()