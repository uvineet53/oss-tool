import requests
import json

url = "https://oss-tool-backend.herokuapp.com/scan"
payload = {"repo":"https://github.com/0c34/govwa", "rule":'bsa'}
res = requests.post(url,json=payload)
data = json.loads(res.text)
print(data)
