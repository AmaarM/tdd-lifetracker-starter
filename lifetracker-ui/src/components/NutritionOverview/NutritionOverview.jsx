import "./NutritionOverview.css";
import { AuthContextProvider ,useAuthContext } from "../../contexts/auth";
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition";
import NutritionFeed from "components/NutritionFeed/NutritionFeed";
import { Navigate, Link } from "react-router-dom";

export default function NutritionOverview(){
    const { nutrition, error, isInitialized, isProcessing, logNutrition } = useNutritionContext();

    
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
                <Link to="/nutrition/create"><button className="create-Nutrition">Record Nutrition</button></Link>
            </div>
            <NutritionFeed />
        </div>
    )

}


//onClick={() => <Navigate to="/"/>}