import React from 'react'
import { useLocation } from 'react-router-dom';

function Results() {
    const { state } = useLocation();
    return (
        <div>{state.map(e=>{
            return (
                <h6>{e.file}</h6>
            );
        })}</div>
    )
}

export default Results