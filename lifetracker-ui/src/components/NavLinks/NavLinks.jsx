import "./NavLinks.css";
import { Link } from "react-router-dom"

export default function NavLinks(props){
    return(
        <div className="nav-links">
            <div className="Links">
                <Link to="/activity" className="link">Activity</Link>
                <Link to="/nutrition" className="link">Nutrition</Link>
                <Link to="/" className="link">PlaceHolder</Link>
                <Link to="/" className="link">PlaceHolder</Link>
            </div>
            <div className="Buttons">
                <Link to="/login"><button className="logout-button">Login</button></Link>
                <Link to="/register"><button className="logout-button">Register</button></Link>
            </div>
        </div>
    )
}