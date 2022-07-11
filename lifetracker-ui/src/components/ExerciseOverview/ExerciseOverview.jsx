import "./ExerciseOverview.css";
import { useExerciseContext } from "../../contexts/exercises";
import ExerciseCard from "components/ExerciseCard/ExerciseCard";
import { Link } from "react-router-dom";


export default function ExerciseOverview(){
    const { exercises, initialized } = useExerciseContext();
    if(Object.keys(exercises).length > 0){
        return (
            <div className="exercise-overview">
                <div className="exerciseForm-nav">
                    <h1 className="exercises-navbar">Exercises</h1>
                    <Link to="/exercise/create"><button className="activity-btns">Record Exercises</button></Link>
                </div>
                <div className="exercises-feed">
                    {exercises.map((e,idx) => (
                        <ExerciseCard name={e.name} category={e.category} duration={e.duration} createdAt={e.created_at} key={idx}/>
                    ))}
                </div>
            </div>
        )
    }
    else{
        return(
           <div className="exercises-nothing">
                <h2 className="nothing-title">Exercises</h2>
                <h2>Needs Info, Log Your Exercises</h2>
                <Link to="/exercise/create"><button className="activity-btns">Log Exercises</button></Link>
            </div> 
        )
    }
}