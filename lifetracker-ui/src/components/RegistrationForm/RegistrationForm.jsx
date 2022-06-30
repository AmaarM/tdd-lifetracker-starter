import "./RegistrationForm.css"

export default function RegistrationForm() {
  return (
    <div className="registration-form">
      <div className="input-field">
        <h4 className="title1">Email</h4>
        <input className="form-input" name="email" type="email"></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Username</h4>
        <input className="form-input" name="username" type="text"></input>
      </div>
      <h4 className="title1">Name</h4>
      <div className="split input-field">
        <input className="form-input-name" name="firstName" type="text" placeholder="First Name"></input>
        <input className="form-input-name" name="lastName" type="text" placeholder="Last Name"></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Password</h4>
        <input className="form-input" name="password" type="text"></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Confirm Password</h4>
        <input className="form-input" name="passwordConfirm" type="text"></input>
      </div>
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
