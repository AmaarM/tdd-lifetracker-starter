import "./NavLinks.css";
import { Link } from "react-router-dom"
import { AuthContextProvider, useAuthContext} from "../../contexts/auth";

export default function NavLinks(props){

    const { user, logOutUser } = useAuthContext();

    if(user.id > 0){
        let capitalizedName = user.first_name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        return(
            <div className="nav-links">
                <div className="Links">
                    <Link to="/activity" className="link">Activity</Link>
                    <Link to="/nutrition" className="link">Nutrition</Link>
                    <Link to="/" className="link">PlaceHolder</Link>
                    <Link to="/" className="link">PlaceHolder</Link>
                </div>
                <div className="Buttons-logged-in">
                    <h1 className="hello" >Hello {capitalizedName}</h1>
                    <a href="/"><button className="logout-button" onClick={logOutUser}>Log Out</button></a>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="nav-links">
                <div className="Links">
                    <Link to="/NotFound" className="link">Activity</Link>
                    <Link to="/NotFound" className="link">Nutrition</Link>
                    <Link to="/NotFound" className="link">PlaceHolder</Link>
                    <Link to="/NotFound" className="link">PlaceHolder</Link>
                </div>
                <div className="Buttons">
                    <Link to="/login"><button className={Object.keys(user) > 0 ? "hidden" : "logout-button"}>Login</button></Link>
                    <Link to="/register"><button className="logout-button">Register</button></Link>
                </div>
            </div>
        )
    }
}



/* <Link to="/login"><button className={Object.keys(user) > 0 ? "hidden" : "logout-button"}>Login</button></Link>
<Link to="/"><button className={Object.keys(user) > 0 ? "logout-button" : "hidden"} onClick={logOutUser}>Log Out</button></Link>
<Link to="/register"><button className="logout-button">Register</button></Link> */