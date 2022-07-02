import "./LoginForm.css";
import { AuthContextProvider, useAuthContext} from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";
import { Navigate } from "react-router-dom";
import React from "react";

export default function LoginForm(){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { user, setUser, loginUser, error } = useAuthContext();


    console.log(user);
    function handleEmailForm(e){
        setEmail(e.target.value);
    }

    function handlePasswordForm(e){
        setPassword(e.target.value);
    }

    function handleLoginSubmit(){
        loginUser(email,password);
    }
    console.log(error);

    if(user.id > 0) {
        return (
            <div className="logged-in-wrapper">
                {<Navigate to="/"/>}
            </div>
        )
    }
    else{
        return(
            <div className="login-form">
                <div className="login-form-wrapper">
                    <h1>Email</h1>
                    <input type="email" className="form-input" name="email" value={email} onChange={handleEmailForm}></input>
                    <h1>Password</h1>
                    <input type="text" className="form-input" name="password" value={password} onChange={handlePasswordForm}></input>
                    <h1></h1>
                    <button className="submit-login" onClick={handleLoginSubmit}>Submit</button>
                    <h2 className={error.length > 0 ? "error-login" : "hidden"}>Wrong Password, Try Again...</h2>
                </div>
            </div>
        )
    }
}

