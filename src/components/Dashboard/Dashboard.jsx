import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Scan from "../Scan/Scan";
import ResponsiveAppBar from "./Navbar/Navbar";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    const fetchPrevious = ()=>{
        console.log(user.uid);
        try{
            navigate("/previous-results",{ state: user.uid })
        }catch (err){
            console.error(err);
        }
    }
    useEffect(() => {
        if (loading) {return};
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <div className="dashboard">
           <ResponsiveAppBar name email={user?.email} logout={logout} fetchPrevious={fetchPrevious}/>
            <div className="dashboard__container">
                Logged in as
                <div>{name}</div>
                <div>{user?.email}</div>
                <Scan user = {user}/>
            </div>
        </div>
    );
}
export default Dashboard;