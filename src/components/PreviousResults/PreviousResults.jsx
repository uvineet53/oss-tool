import React, { useState, useEffect } from 'react'
import { db } from "../../config/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { useLocation } from 'react-router-dom';

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
        <div>
            <ol>
                {results.map(e => {
                    return (
                        <li>{e.timeStamp.toDate().toString()}</li>
                    );
                })}
            </ol>
        </div>
    )
}

export default PreviousResults;