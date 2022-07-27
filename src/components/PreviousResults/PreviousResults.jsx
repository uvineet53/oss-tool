import React, { useState, useEffect } from 'react'
import { db } from "../../config/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { useLocation } from 'react-router-dom';
import './PreviousResults.css';

function PreviousResults() {
    const [results, setResults] = useState([]);
    const { state } = useLocation();
    const fetchResults = async () => {
        try {
            const q = query(collection(db, "users", state, "previous_scans"));
            const doc = await getDocs(q);
            let results = [];
            doc.docs.map((e) => {
                results.push(e.data())
            })
            setResults(results);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching data");
        }
    };
    useEffect(() => {
        fetchResults();
    }, []);
    return (
        <div id='list'>
            <ol className="alternating-colors">
                {results.map(e => {
                    return (
                        <li><p>{e.timeStamp.toDate().toString()}</p></li>
                    );
                })}
            </ol>
        </div>
    )
}

export default PreviousResults;