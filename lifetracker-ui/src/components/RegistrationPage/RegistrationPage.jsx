import "./RegistrationPage.css";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { AuthContextProvider, useAuthContext} from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";
import { Link } from 'react-router-dom'

export default function RegistrationPage(props){
    const { user } = useAuthContext();
    return(
        <div>
            {user.id > 0 ? <Link to="/activity"></Link> : <RegistrationForm />}
        </div>
    )
}