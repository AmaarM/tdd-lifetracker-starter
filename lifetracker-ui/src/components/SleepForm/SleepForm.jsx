import "./SleepForm.css";
import { useState } from "react"; 

export default function SleepForm(props){
    const [duration, setDuration] = useState(0);

    function setParams(e){
        if(e.target.name === "duration"){
            setDuration(e.target.value);
        }
    }

    return(
        <div className="sleep-form">
            <div className="sleep-input">
                <div className="sleep-navBar">
                    <h4 className="sleep-title">Sleep</h4>
                    <button className="log-sleep">Log Sleep</button>
                </div>
                <div className="sleep-input-fields">
                    <input name="duration" type="number" min={1} value={duration} onChange={setParams} placeholder="Duration" className="input"></input>
                </div>
                <button className="sleep-submit-button">Submit</button>
            </div>
        </div>
    )
}