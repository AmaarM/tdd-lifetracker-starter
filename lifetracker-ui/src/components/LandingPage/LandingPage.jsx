import "./LandingPage.css";
import HeroImage from "../assets/heroImg.jpg";
import TilesIcon1 from "../assets/tiles-icon1.svg";
import TilesIcon2 from "../assets/tiles-icon2.svg";
import TilesIcon3 from "../assets/tiles-icon3.svg";
import TilesIcon4 from "../assets/tiles-icon4.svg";
import { useAuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div className="landing-page">
      <div className="hero">
        <img className="hero-img"></img>
        <h1 className="title">Life Tracker</h1>
        <h2 className="cta">Tracking Your Life, Made Easy!</h2>
      </div>
      <div className="tiles">
        <Link to="/exercise" className="landing-link">
          <div className="tile">
            <img src={TilesIcon1}></img>
            <h5>Fitness</h5>
          </div>
        </Link>
        <Link to="/nutrition" className="landing-link">
          <div className="tile">
            <img src={TilesIcon2}></img>
            <h5>Food</h5>
          </div>
        </Link>
        <Link to="/" className="landing-link">
          <div className="tile">
            <img src={TilesIcon3}></img>
            <h5>Rest</h5>
          </div>
        </Link>
        <Link to="/activity" className="landing-link">
          <div className="tile">
            <img src={TilesIcon4}></img>
            <h5>Planner</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
