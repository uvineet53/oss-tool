import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("infoVulnerability");
    if (token) {
      setError(token);
    } else {
      navigate("/");
    }
  },[]);
  return <div>{error}</div>;
};

export default Error;
