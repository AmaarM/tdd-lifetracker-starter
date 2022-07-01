import "./NutritionPage.css";
import { Routes, Route } from "react-router-dom";
import NutritionOverview from "components/NutritionOverview/NutritionOverview";

export default function NutritionPage(props){
    return(
        <div className="nutrition-page">
            <NutritionOverview />
        </div>
    )
}