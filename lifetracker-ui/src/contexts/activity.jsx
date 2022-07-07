import axios from 'axios';
import React from 'react';
import apiClient from "../services/apiClient"
import { useAuthContext } from '/users/amaar/siteprojects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth';
import { useContext } from 'react';

const ActivityContext = React.createContext(null);

export const  ActivityContextProvider = ({ children }) => {
    const [activity, setActivity] = React.useState({});
    const [initialized,setInitial] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    
/*     if(useAuthContext.user){
        setIsLoading(true);
        setError(null);
        const req = async () => {
            try{
                const grab = await axios.get("http://localhost:3001/activity");
                setActivity(grab.data);
            }
            catch(err){
                setError(err);
            }
        }
        req();
        setIsLoading(false);
        setInitial(true);
    } */

/*     useEffect(async () => {
        setIsProcessing(true);
        try {
            console.log(localStorage.getItem("lifetracker_token"))
            const req = await axios.get("http://localhost:3001/activity", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}});
            console.log(req.data)
            setActivity(req.data);
        }
        catch(err){
            console.log(err);
        }
        setIsProcessing(false);
        setInitial(true);
    },[]) */
    

    const activityValue = {activity, setActivity, isLoading, setIsLoading, initialized, setInitial};


    return (
        <ActivityContext.Provider value={activityValue}>
            {children}
        </ActivityContext.Provider>
    )
}

export const useActivityContext = () => useContext(ActivityContext);