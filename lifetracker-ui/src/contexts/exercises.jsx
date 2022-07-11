import axios from "axios";
import React, { useContext } from "react";
import ApiClient from "../services/apiClient";
import { useAuthContext } from "../contexts/auth";

const ExerciseContext = React.createContext(null);

export const ExerciseContextProvider = ({ children }) => {
    const [exercises, setExercises] = React.useState({});
    const [initialized, setInitial] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [error, setError] = React.useState("");

    const { user } = useAuthContext();

    React.useEffect(async () => {
        setIsProcessing(true);
        if(localStorage.getItem("lifetracker_token")){
            ApiClient.setToken(localStorage.getItem("lifetracker_token"));
          }
        try {
          const req = await ApiClient.getExercises();
          setExercises(req.data.listExercises);
        } catch (err) {
          setError("");
        }
        setIsProcessing(false);
        setInitial(true);
    }, []);

    
    const logExercise = (data) => {
        let obj = {
            name: data.name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
            category: data.category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
            duration:data.duration,
            email: user.email
        }
        const req = async () => {
            try {
                const getData = await ApiClient.logExercises(obj);
                setExercises(getData);
            }
            catch(err){
                console.log(err);
            }
        }
        req();
    }

    const reload = () => {
        if(isLoading === false){
            window.location.reload();
        }
    }

    const exerciseValue = { exercises, initialized, setInitial, isProcessing, setIsProcessing, logExercise, reload };

    return (
        <ExerciseContext.Provider value={exerciseValue}>
            <>{ children }</>
        </ExerciseContext.Provider>
    )
}  


export const useExerciseContext = () => useContext(ExerciseContext);