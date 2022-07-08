import "./ExerciseForm.css";
import { useState } from "react";
import { useExerciseContext } from "../../contexts/exercises"
import { Link } from "react-router-dom";


export default function ExerciseForm(){
    const [exercise, setExercise] = useState("");
    const [duration, setDuration] = useState("");
    const [category, setCategory] = useState("");

    const { logExercise } = useExerciseContext();
    
  function setParams(e){
    if(e.target.name === "exercise"){
      setExercise(e.target.value);
    }
    if(e.target.name === "category"){
      setCategory(e.target.value);
    }
    if(e.target.name === "duration"){
        setDuration(e.target.value);
    }
  }

  function handleExercisesOnSubmit(){
    let obj = {
      name:exercise,
      category: category,
      duration: duration
    }
    logExercise(obj);
  }

  return (
        <div className="exercise-form">
            <div className="exercise-input">
                <div className="exercise-input-field">
                    <h4>Exercise</h4>
                    <input name="exercise" type="text" value={exercise} onChange={setParams} placeholder="Exercise" className="input-fields"></input>
                </div>
                <div className="exercise-input-field">
                    <h4>Category</h4>
                    <input name="category" type="text" value={category} onChange={setParams} placeholder="Category" className="input-fields"></input>
                </div>
                <div className="exercise-input-field">
                    <h4>Duration (In Minutes)</h4>
                    <input name="duration" type="number" value={duration} onChange={setParams} placeholder="Duration" className="input-fields" min={1}></input>
                </div>
                <Link to="/exercise"><button className="submit-button" onClick={handleExercisesOnSubmit}>Submit</button></Link>
            </div>
        </div>
      )
}