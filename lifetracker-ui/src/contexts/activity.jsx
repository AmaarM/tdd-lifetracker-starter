import axios from 'axios';
import React from 'react';
import ApiClient from "../services/apiClient";
import { useContext } from 'react';
const ActivityContext = React.createContext(null);

export const  ActivityContextProvider = ({ children }) => {
    const [activity, setActivity] = React.useState({});
    const [initialized, setInitial] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [exerciseStats, setExerciseStats] = React.useState(null);
    const [showSleep, setShowSleep] = React.useState(true);
    const [sleep, logSleep] = React.useState(0);
    
    React.useEffect(async () => {
        setIsLoading(true);
        if(localStorage.getItem("lifetracker_token")){
            ApiClient.setToken(localStorage.getItem("lifetracker_token"));
          }
        try {
            const req = await ApiClient.getActivity();
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
        if(localStorage.getItem("lifetracker_token")){
            ApiClient.setToken(localStorage.getItem("lifetracker_token"));
          }
        try {
            const req = await ApiClient.getActivityExercise();
            setExerciseStats(req.data);
        }
        catch(err){
            console.log(err);
        }
        setIsLoading(false);
        setInitial(true);
    },[])
    
    const reload = () => {
        if(isLoading === false){
            window.location.reload();
        }
    }

    const activityValue = {activity, setActivity, isLoading, setIsLoading, initialized, setInitial, reload, exerciseStats, showSleep, setShowSleep, sleep, logSleep };
    return (
        <ActivityContext.Provider value={activityValue}>
            {children}
        </ActivityContext.Provider>
    )
}

export const useActivityContext = () => useContext(ActivityContext);