import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Scan from "../Scan/Scan";
import { Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import logo from "../../assets/logo.png";
import { RiScan2Line } from "react-icons/ri";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { GoInfo } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import PreviousResults from "../PreviousResults/PreviousResults";
import About from "../About/About";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [currPage,setCurrPage] = useState(0);
    let pages = [
        <Scan user={user}/>,
        <PreviousResults user={user}/>,
        <About/>
    ]
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

    useEffect(() => {
        if (loading) { return };
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    const handleDashboardButton=(event,index)=>{
        event.currentTarget.classList.toggle('active');
        setCurrPage(index);
    }
    return (
        <>
            <div id="dashboard__wrapper">
                <div id="navbar">
                    <ul id="dashboard__list">
                        <div onClick={()=>setCurrPage(0)}><img src={logo} alt="logo"/></div>
                        <li className={ currPage === 0 && 'active' } onClick={()=>setCurrPage(0)}><RiScan2Line size={25} style={{marginRight:"10px"}}/> New Scan</li>
                        <li className={ currPage === 1 && 'active' } onClick={()=>setCurrPage(1)}><AiOutlineSecurityScan size={25} style={{marginRight:"10px"}}/> Previous Scans</li>
                        <li className={ currPage === 2 && 'active' } onClick={()=>setCurrPage(2)}><GoInfo size={25} style={{marginRight:"10px"}}/>About Us</li>
                    </ul>
                    <div id="account">
                        <div id="account__wrapper">
                            <Avatar variant="circular" sx={{ bgcolor: deepOrange[300] }}>{name.substring(0, 1).toUpperCase()}</Avatar>
                            <div id="name">
                                <h5>{name}</h5>
                                <h6>{user?.email}</h6>
                            </div>
                        </div>
                        <button id="logout"><FiLogOut style={{marginRight:"10px"}}/>Logout</button>
                    </div>

                </div>
                <div>{pages[currPage]}</div>
            </div>
        </>
    );
}
export default Dashboard;