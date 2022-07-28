from unittest import result
from flask import Flask, request
from flask_cors import CORS
from scan import scan
import os

app = Flask(__name__)
CORS(app)

@app.get("/")
def root():
    return {"message": "Welcome to Dunder Mifflin OSS Inspector"}


@app.post("/scan")
def run_scan():
    repo = request.json
    data = scan(repo=repo)
    total_files = data["total_files"]
    results = data["results"]
    return {"results": results,"total_files":total_files}


if __name__ == "__main__":
    # app.run()
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
