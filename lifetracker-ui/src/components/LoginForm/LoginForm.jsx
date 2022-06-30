import "./LoginForm.css";

export default function LoginForm(){
    return(
        <div className="login-form">
            <div className="login-form-wrapper">
                <h1>Email</h1>
                <input type="email" className="form-input" name="email" value="" onChange={""}></input>
                <h1>Password</h1>
                <input type="text" className="form-input" name="password" value="" onChange={""}></input>
            </div>
        </div>
    )
}

