import React from "react";
import { useLocation } from "react-router-dom";
import "./Results.css";

function Results() {
  const { state } = useLocation();
  let counter = 0;
  return (
    <>
      <div id="vuln">
        <div className="container">
          <h1 className="center">Vulnerabilities</h1>
          {state.map((e) => {
            return (
              <article className="episode">
                {counter<10?<div className="episode__number">0{counter++}</div>:<div className="episode__number">{counter++}</div>}
                <div className="episode__content">
                  <div className="title">{e.file}</div>
                  <div className="story">
                    {e.issues.map((issue) => {
                      return <p>{issue.description}</p>;
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Results;
