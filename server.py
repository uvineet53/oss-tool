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
    return {"results": scan(repo=repo)}


if __name__ == "__main__":
    # app.run()
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
