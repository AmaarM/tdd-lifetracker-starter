import axios from 'axios';
import React from 'react';
import apiClient from "../services/apiClient"
import { useAuthContext } from '/users/amaar/siteprojects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
const ActivityContext = React.createContext(null);

export const  ActivityContextProvider = ({ children }) => {
    const [activity, setActivity] = React.useState({});
    const [initialized,setInitial] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [exerciseStats, setExerciseStats] = React.useState(null);
    
    React.useEffect(async () => {
        setIsLoading(true);
        try {
            console.log(localStorage.getItem("lifetracker_token"))
            const req = await axios.get("http://localhost:3001/activity", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}});
            console.log(req.data)
            setActivity(req.data);
        }
        catch(err){
            console.log(err);
        }
        setIsLoading(false);
        setInitial(true);
    },[])

    React.useEffect(async () => {
        setIsLoading(true);
        try {
            console.log(localStorage.getItem("lifetracker_token"))
            const req = await axios.get("http://localhost:3001/activity/exercise", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}});
            setExerciseStats(req.data);
        }
        catch(err){
            console.log(err);
        }
        setIsLoading(false);
        setInitial(true);
    },[])

    console.log(exerciseStats);
    console.log(activity);

    const reload = () => {
        if(isLoading === false){
            window.location.reload();
        }
    }

    const activityValue = {activity, setActivity, isLoading, setIsLoading, initialized, setInitial, reload, exerciseStats };
    return (
        <ActivityContext.Provider value={activityValue}>
            {children}
        </ActivityContext.Provider>
    )
}

export const useActivityContext = () => useContext(ActivityContext);