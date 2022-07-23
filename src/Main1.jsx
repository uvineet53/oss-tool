import React from "react";
import info from "./data.js";
import "./index.css";
import { createSearchParams, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  function click(e) {
    if(info[e.target.id]!==undefined){
    navigate({
      pathname: "/error",
      search: createSearchParams({ id: JSON.stringify(info[e.target.id]) }).toString(),
    });}else{
      alert('Please Click on the heading');
    }
  }
  let c = 0;
  return (
    <div id="box">
      <strong>Vulnerabilities</strong>
      <ol className="alternating-colors">
        {info.map((doc) => {
          return (
            <li onClick={click}>
              <strong id={c++}>{doc.file + '   <Click me for more detail/>'}</strong>
              <p>
                {doc.issues.map((temp)=>{
                    return <p>{temp.description}</p>
                })}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Main;
