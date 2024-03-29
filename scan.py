import subprocess
import json
import re
import uuid
from constants import rules, pattern


def scan(repo):
    try:
        repository = repo["repo"]
        fileName = "." + str(uuid.uuid1())
        fileDir = "./" + fileName + "/"
        getRepo = subprocess.run(
            ["git", "clone", repository.encode(), fileName],
            capture_output=True,
            text=True,
        )
        total_files = subprocess.run(
            ["tree", fileName],
            capture_output=True,
            text=True,
        )
        files = total_files.stdout.split("directories, ")[1].split("files")[0].strip();
        print(files)
        if repo["rule"] in rules:
            result = subprocess.run(
                rules[repo["rule"]], cwd=fileDir, capture_output=True, text=True
            )
        else:
            return None
        subprocess.run(["rm", "-rf", fileName])
        data = result.stdout.split("Findings:")[1].strip().split("\n\n\n")
        finalData = []
        for value in data:
            strData = value[value.find("\n") :]
            elements = re.split(pattern, strData)
            issues = []
            for element in elements:
                issues.append(
                    {
                        "description": element[
                            element.find("\n        ") + 1 : element.find("Details")
                        ].strip(),
                        "details": element[element.find("Details") :].strip(),
                    }
                )

            finalData.append(
                {"file": value[0 : value.find("\n")].strip(), "issues": issues}
            )
        return {"results":finalData,"total_files":files}
    except Exception as e :
        print(e)
        return None
