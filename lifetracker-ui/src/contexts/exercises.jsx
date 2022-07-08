import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";

const ExerciseContext = React.createContext(null);

export const ExerciseContextProvider = ({ children }) => {
    const [exercises, setExercises] = React.useState({});
    const [initialized, setInitial] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [error, setError] = React.useState("");

    const { user } = useAuthContext();

    React.useEffect(async () => {
        try {
          const req = await axios.get("http://localhost:3001/exercise", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}});
          setExercises(req.data.listExercises);
        } catch (err) {
          setError("");
        }
        setIsProcessing(false);
        setInitial(true);
      }, []);

    
      const logExercise = (data) => {
        let obj = {
            name:data.name,
            category:data.category,
            duration:data.duration,
            email: user.email
        }
        const req = async () => {
            try {
                const getData = await axios.post("http://localhost:3001/exercise", obj);
                console.log(getData);
                setExercises(getData);
            }
            catch(err){
                console.log(err);
            }
        }
        req();
        console.log(exercises)
    }

    const exerciseValue = { exercises, initialized, setInitial, isProcessing, setIsProcessing, logExercise };

    return (
        <ExerciseContext.Provider value={exerciseValue}>
            <>{ children }</>
        </ExerciseContext.Provider>
    )
}  


export const useExerciseContext = () => useContext(ExerciseContext);