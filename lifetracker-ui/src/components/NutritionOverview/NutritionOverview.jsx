import "./NutritionOverview.css";
import { AuthContextProvider ,useAuthContext } from "/users/amaar/siteprojects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";
import { NutritionContextProvider, useNutritionContext } from "/users/amaar/siteprojects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/nutrition";
import { Link } from "react-router-dom";

export default function NutritionOverview(){
    const { nutrition, error, isInitialized, isProcessing } = useNutritionContext();
    
    if(error){
        return (
            <h2 className="error">Error...</h2>
        )
    }

    return (
        <div className="nutrition-overview">
            <h1 className="overview-title">Nutrition</h1>
            <div className="nutrition-wrapper">
                <h2 className="nutrition-title">Overview</h2>
                <button className="create-Nutrition">Record Nutrition</button>
            </div>
        </div>
    )

}