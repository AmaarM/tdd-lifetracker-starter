import "./NutritionForm.css"

export default function NutritionForm(){
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
    )
}