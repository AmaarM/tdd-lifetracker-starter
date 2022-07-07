import "./NutritionFeed.css"
import { AuthContextProvider ,useAuthContext } from "../../contexts/auth";
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition";
import NutritionCard from "components/NutritionCard/NutritionCard";

export default function NutritionFeed(){
    const { nutrition } = useNutritionContext();

    if(Object.keys(nutrition) <= 0){
        return (
        <div className="nutrition-feed">
            <h1>Nothing Here Yet</h1>
        </div>
        )
    }
    else{
        const arr = nutrition.nutrition;
    return (
        <div className="nutrition-feed">
            {arr.map((e,idx) => (
                <NutritionCard calories={e.calories} category={e.category} imageUrl={e.image_url} createdAt={e.created_at} name={e.name}/>
            ))}
        </div>  
    )
}
}