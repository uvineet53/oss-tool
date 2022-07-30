import React from "react";
import "./Results.css";
import { FaGlassWhiskey } from 'react-icons/fa';

function Results({ results, files }) {
  const calculateScore = (numberOfVulnerabilities, totalFiles) => {
    return parseInt((numberOfVulnerabilities / parseInt(totalFiles)) * 100);
  }
  const checkVulnerabilities = (length) => {
    if (length > 10) return "Highly Vulnerable";
    if (length <= 10 && length > 1) return "Vulnerable";
    return "Secure";
  }
  return (
    <div id="vulnerabilities">
      <h1 className="center">Vulnerabilities</h1>
      <div className="container">
        {results.length == 0 ? <div className="empty__episode">
          <FaGlassWhiskey size="100px" style={{ marginBottom: "10px" }} />
          No Active Scans Found!
        </div> :
          <div>
            <div className="total_number">{results.length} Vulnerabilities Found!             <strong>Vulnerability Score : {calculateScore(results.length, files)}</strong>
            </div>
            <br />
            <div className="category">{checkVulnerabilities(results.length)}</div>
            {results.map((e, index) => {
              return (
                <div className="episode">
                  <h4>{index + 1}.</h4>
                  <div className="episode__content">
                    <div className="title">{e.file}</div>
                    <div className="story">
                      {e.issues.map((issue) => {
                        return <p>{issue.description}</p>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default Results;
