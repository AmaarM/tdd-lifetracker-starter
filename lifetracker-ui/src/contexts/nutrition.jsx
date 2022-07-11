import axios from 'axios';
import React from 'react';
import ApiClient from "../services/apiClient"
import { useContext, createContext, useState, useEffect } from 'react';
import { useAuthContext } from "../contexts/auth";


const NutritionContext = createContext(null);

export const NutritionContextProvider = ({ children }) => {
    const [nutrition, setNutrition] = useState([]);
    const [initialized, setInitial] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [error, setError] = React.useState(null);

    const { user } = useAuthContext();
    

    useEffect(async () => {
        setIsProcessing(true);
        if(localStorage.getItem("lifetracker_token")){
            ApiClient.setToken(localStorage.getItem("lifetracker_token"));
        }
        try {
            const req = await ApiClient.getNutrition();
            setNutrition(req.data);
        }
        catch(err){
            console.log(err);
        }
        setIsProcessing(false);
        setInitial(true);
    },[])

   
    
    const logNutrition = (data) => {
        let obj = {
            name:data.name,
            category:data.category,
            calories:data.calories,
            image_url:data.imageUrl,
            email:data.email
        }
        const req = async () => {
            try{
                const getData = await ApiClient.logNutrition(obj)
                setNutrition(getData.data)
            }
            catch(err){
                console.log(err);
            }
        }
        req();
    };

    const nutritionValue = { nutrition, isProcessing, initialized, error, logNutrition }
    
    return (
        <NutritionContext.Provider value={nutritionValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )

}


export const useNutritionContext = () => useContext(NutritionContext);

