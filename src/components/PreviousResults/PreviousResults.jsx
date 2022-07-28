import React, { useState, useEffect } from 'react'
import { db } from "../../config/firebase";
import { query, collection, getDocs, orderBy, limit } from "firebase/firestore";
import './PreviousResults.css';
import Results from '../Results/Results';
import { CircularProgress } from '@mui/material';

function PreviousResults({ user }) {
    const [results, setResults] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [currResult, setCurrResult] = useState(0);

    const fetchResults = async () => {
        try {
            const q = query(collection(db, "users", user?.uid, "previous_scans"));
            const doc = await getDocs(query(q, orderBy("timeStamp", "desc")));
            let results = [];
            doc.docs.map((e) => {
                results.push(e.data())
            })
            setResults(results);
            setShowLoader(false);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching data");
        }
    };
    useEffect(() => {
        if (user !== undefined) {
            fetchResults();
        }
        console.log(results[currResult]);
    }, [currResult]);
    return (
        <div className="prev__wrapper">
            <div id='list'>
                <h1 style={{ textAlign: "center" }}>Your Scan History</h1>
                {showLoader === true ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}><CircularProgress /></div> :
                    <ul>
                        {results.map((e, index) => {
                            return (
                                <li className={index == currResult ? "activeResult" : ""} onClick={() => setCurrResult(index)}><p>{e.timeStamp.toDate().toString()}</p></li>
                            );
                        })}
                    </ul>
                }
            </div>
            <Results results={results.length == 0 ? [] : results[currResult].result.results} />
        </div>

    )
}

export default PreviousResults;