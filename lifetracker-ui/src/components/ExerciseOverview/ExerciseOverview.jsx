import "./ExerciseOverview.css";
import { useExerciseContext } from "../../contexts/exercises";
import Loading from "components/Loading/Loading";
import ExerciseCard from "components/ExerciseCard/ExerciseCard";

export default function ExerciseOverview(){
    const { exercises } = useExerciseContext();
    console.log(exercises);
    
    if(Object.keys(exercises).length > 0){
        return (
            <div className="exercise-overview">
                <h1 className="exercises-navbar">Exercises</h1>
                <div className="exercises-feed">
                    {exercises.map((e,idx) => (
                        <ExerciseCard name={e.name} category={e.category} duration={e.duration} createdAt={e.created_at} />
                    ))}
                </div>
            </div>
        )
    }
    else{
        return(
           <div>
                <h2>Exercises</h2>
                <Loading />
            </div> 
        )
    }
}