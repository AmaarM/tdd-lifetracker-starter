import "./NutritionPage.css";
import NutritionOverview from "components/NutritionOverview/NutritionOverview";

export default function NutritionPage(props){
    return(
        <div className="nutrition-page">
            <NutritionOverview />
        </div>
    )
}