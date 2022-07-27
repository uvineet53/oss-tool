import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import login from "../../assets/login.svg";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user){
            localStorage.setItem('user',1);
            navigate('/loader');
            setTimeout(()=>{navigate("/dashboard");},3500);            
        }
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__container">
                    <h4>Login to your account</h4>
                    <div id="login__textbox">
                        <MdAlternateEmail color="white" size={22} />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div id="login__textbox">
                        <RiLockPasswordFill color="white" size={22} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        className="login__btn"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                    <button className="login__google" onClick={signInWithGoogle}>
                        <FcGoogle size={20} style={{ marginRight: "10px", marginLeft: "-10px" }} />   Login with Google
                    </button>
                    <div className="login__footer">
                        Don't have an account? <Link to="/register" className="redirect__link">Register</Link>
                    </div>
                    <div>
                        <Link to="/reset" className="forgot__password">Forgot Password</Link>
                    </div>
                </div>
                <div className="login__image">
                    <img src={login} alt="" />
                </div>
            </div>

        </div>
    );
}
export default Login;