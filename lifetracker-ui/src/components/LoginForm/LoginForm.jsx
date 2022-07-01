import "./LoginForm.css";
import { AuthContextProvider, useAuthContext} from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";
import React from "react";

export default function LoginForm(){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { user, setUser, loginUser } = useAuthContext();


    console.log(user);
    function handleEmailForm(e){
        setEmail(e.target.value);
    }

    function handlePasswordForm(e){
        setPassword(e.target.value);
    }

    function handleLoginSubmit(){
        console.log(email);
        console.log(password);
        loginUser(email,password);
        console.log(user);
    }

    if(user.id > 0) {
        return (
            <div className="logged-in-wrapper">
                <div className="logged-in">
                    <h1 className="error-msg">You're Already Logged In</h1>
                    <button className="go-toActivity">Activity</button>
                    <button className="go-toActivity">Nutrition</button>
                </div>
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
                </div>
            </div>
        )
    }
}

