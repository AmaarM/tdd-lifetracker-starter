import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition";
import NutritionForm from "components/NutritionForm/NutritionForm";


export default function NutritionNew(props){
    const { nutrition, logNutrition } = useNutritionContext();
    
    return (
        <div>
            <NutritionForm nutrition={nutrition} logNutrition={logNutrition}/>
        </div>
    )
}