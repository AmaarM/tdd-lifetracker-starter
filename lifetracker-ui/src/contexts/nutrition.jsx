import axios from 'axios';
import React from 'react';
import apiClient from "../services/apiClient"
import { useContext, createContext, useState, useEffect } from 'react';
import { AuthContextProvider, useAuthContext} from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";
import { useParams } from 'react-router-dom';


const NutritionContext = createContext(null);

export const NutritionContextProvider = ({ children }) => {
    const [nutrition, setNutrition] = useState([]);
    const [initialized, setInitial] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [error, setError] = React.useState(null);

    const { user } = useAuthContext();
    console.log(user.email)

    useEffect(async () => {
        setIsProcessing(true);
        try {
            console.log(localStorage.getItem("lifetracker_token"))
            const req = await axios.get("http://localhost:3001/nutrition", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}});
            console.log(req.data)
            setNutrition(req.data);
        }
        catch(err){
            console.log(err);
        }
        setIsProcessing(false);
        setInitial(true);
    },[])

    console.log(nutrition);
    
    const logNutrition = (data) => {
        console.log(data);
        let obj = {
            name:data.name,
            category:data.category,
            calories:data.calories,
            image_url:data.imageUrl,
            email:data.email
        }
        const req = async () => {
            try{
                const getData = await axios.post("http://localhost:3001/nutrition", {data:obj})
                console.log(getData.data.nutrition);
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

