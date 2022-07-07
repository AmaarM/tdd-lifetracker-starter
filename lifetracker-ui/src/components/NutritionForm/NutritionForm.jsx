import "./NutritionForm.css"
import { AuthContextProvider, useAuthContext} from "../../contexts/auth";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition";
import { Link } from "react-router-dom";


export default function NutritionForm(props){
  const [calories, setCalories] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");

  const { user } = useAuthContext(); 


  function setParams(e){
    if(e.target.name === "name"){
      setName(e.target.value);
    }
    if(e.target.name === "category"){
      setCategory(e.target.value);
    }
    if(e.target.name === "calories"){
      setCalories(e.target.value);
    }
    if(e.target.name === "imageUrl"){
      setImageUrl(e.target.value);
    }
  }

  function handleOnSubmit(){
    let obj = {name:name, category:category, calories:calories, imageUrl:imageUrl, email:user.email}
    props.logNutrition(obj)
  }

    return (
      <div className="nutrition-form">
      <div className="input-field">
        <h4 className="title1">Name</h4>
        <input className="form-input" name="name" type="name" value={name} onChange={setParams}></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Category</h4>
        <input className="form-input" name="category" type="text" value={category} onChange={setParams}></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Calories</h4>
        <input className="form-input" name="calories" type="text" value={calories} onChange={setParams}></input>
      </div>
      <div className="input-field">
        <h4 className="title1">Image</h4>
        <input className="form-input" name="imageUrl" type="text" value={imageUrl} onChange={setParams}></input>
      </div>
      <div className="register-button">
        <Link to="/nutrition"> <button onClick={handleOnSubmit} className="register">Register</button> </Link>
      </div>
    </div>
    )
}