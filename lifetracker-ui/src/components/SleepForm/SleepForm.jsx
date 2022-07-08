import "./SleepForm.css";
import { useState } from "react"; 
import { useActivityContext } from "../../contexts/activity";


export default function SleepForm(props){
    const [duration, setDuration] = useState(0);
    const{ sleep, logSleep, showSleep, setShowSleep } = useActivityContext();

    function setParams(e){
        if(e.target.name === "duration"){
            setDuration(e.target.value);
        }
    }
    function handleSleepLogButton(){
        let tempSleep = Number(sleep) + Number(duration);
        logSleep(tempSleep);
        handleShowSleep();
    }

    function handleShowSleep(){
        let show = !showSleep;
        setShowSleep(show);
    }
    return(
        <div className="sleep-form">
            <div className="sleep-input">
                <div className="sleep-navBar">
                    <h4 className="sleep-title">Sleep (In Hours)</h4>
                    <button className="log-sleep" onClick={handleShowSleep}>Log Sleep</button>
                </div>
                <div className="sleep-input-fields">
                    <input name="duration" type="number" min={1} value={duration} onChange={setParams} placeholder="Duration" className="input"></input>
                </div>
                <button className="sleep-submit-button" onClick={handleSleepLogButton}>Submit</button>
            </div>
        </div>
    )
}
