import "./RegistrationForm.css"
import { useState, useContext } from "react";
import { AuthContextProvider, useAuthContext } from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { signUpUser, user } = useAuthContext();

  function handleOnRegisterSubmit(){
    let userObj = {username:userName, password:password, firstName:firstName, lastName:lastName, email:email};
    signUpUser(userObj);
  }

  function setParams(e){
    if(e.target.name === "email"){
      setEmail(e.target.value);
    }
    if(e.target.name === "password"){
      setPassword(e.target.value);
    }
    if(e.target.name === "username"){
      setUserName(e.target.value);
    }
    if(e.target.name === "firstName"){
      setFirstName(e.target.value);
    }
    if(e.target.name === "lastName"){
      setLastName(e.target.value);
    }
  }
  
  return (
    <div className="registration-form">
      <div className="input-field">
        <h4 className="title1">Email</h4>
        <input className="form-input" name="email" type="email" value={email} onChange={setParams}></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Username</h4>
        <input className="form-input" name="username" type="text" value={userName} onChange={setParams}></input>
      </div>
      <h4 className="title1">Name</h4>
      <div className="split input-field">
        <input className="form-input-name" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={setParams}></input>
        <input className="form-input-name" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={setParams}></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Password</h4>
        <input className="form-input" name="password" type="text" value={password} onChange={setParams}></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Confirm Password</h4>
        <input className="form-input" name="passwordConfirm" type="text" onChange={setParams}></input>
      </div>
      <button onClick={handleOnRegisterSubmit}>Register</button>
    </div>
  );
}

/* 
<input className="form-input" name="email" type="email"></input>
<input className="form-input" name="username" type="text"></input>
<input className="form-input" name="firstName" type="text"></input>
<input className="form-input" name="lastName" type="text"></input>
<input className="form-input" name="password" type="text"></input>
<input className="form-input" name="passwordConfirm" type="text"></input> */
