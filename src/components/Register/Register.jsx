import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../config/firebase";
import "./Register.css";
import { MdAlternateEmail } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import login from "../../assets/login.svg";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate('/dashboard', { replace: true });
    }, [user, loading]);

    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__container">
                <h4>Sign Up for an account</h4>
                    <div className="register__textbox">
                        <FaRegUserCircle color="white" size={22} />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="register__textbox">
                        <MdAlternateEmail color="white" size={22} />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="register__textbox">
                        <RiLockPasswordFill color="white" size={22} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button className="register__btn" onClick={register}>
                        Register
                    </button>
                    <button
                        className="register__google"
                        onClick={signInWithGoogle}
                    >
                    <FcGoogle size={20} style={{ marginRight: "10px", marginLeft: "-10px" }} />     Register with Google
                    </button>
                    <div className="register__footer">
                        Already have an account? <Link to="/" className="redirect__link">Login</Link>
                    </div>
                </div>
                <div className="register__image">
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Register;