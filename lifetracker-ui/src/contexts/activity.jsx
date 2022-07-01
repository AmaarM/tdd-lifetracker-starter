import axios from 'axios';
import React from 'react';
import apiClient from "../services/apiClient"
import { useAuthContext } from '/users/amaar/siteprojects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth';
import { useContext } from 'react';

const ActivityContext = React.createContext();

export function useActivityContext(){
    return useContext(ActivityContext);
}

export function ActivityContextProvider({ children }){
    const [activity, setActivity] = React.useState({});
    const [initialized,setInitial] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    if(useAuthContext.user){
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
        setIsLoading(false);
        setInitial(true);
    }

    const activityValue = {activity, setActivity, isLoading, setIsLoading, initialized, setInitial};


    return (
        <ActivityContext.Provider value={activityValue}>
            {children}
        </ActivityContext.Provider>
    )

}
