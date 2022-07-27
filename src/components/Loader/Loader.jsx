import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loaders from "../../assets/githubLogo.png";
import CircularProgress from '@mui/material/CircularProgress';
import "./Loader.css";

export default function CircularIndeterminate() {
  const [progress,setProgress] = useState(10);
  useEffect(()=>{
    if(!localStorage.getItem('user')){
      localStorage.removeItem('user');
      useNavigate.navigate('/');
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div id="loader">
      <img src={loaders} alt="Loading Please Wait..." />
      <CircularProgress variant="determinate" value={progress} style={{color:'white'}}/>
    </div>
  );
}
