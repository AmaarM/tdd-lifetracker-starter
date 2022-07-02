import { NutritionContextProvider, useNutritionContext } from "/users/amaar/siteprojects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/nutrition"
import NutritionForm from "components/NutritionForm/NutritionForm";


export default function NutritionNew(props){
    const { nutrition, logNutrition } = useNutritionContext();
    
    return (
        <div>
            <NutritionForm nutrition={nutrition} logNutrition={logNutrition}/>
        </div>
    )
}