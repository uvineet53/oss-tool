import requests
import json

url = "http://127.0.0.1:8000/scan"
payload = {"repo":"https://github.com/0c34/govwa", "rule":'bsa'}
res = requests.post(url,json=payload)
data = json.loads(res.text)
print(data['results'])
