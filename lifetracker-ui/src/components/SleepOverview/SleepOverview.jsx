import "./SleepOverview.css";
import { useActivityContext } from "../../contexts/activity";
 
export default function SleepOverview(props){
    const{ sleep, logSleep, showSleep, setShowSleep } = useActivityContext();
    
    function handleShowSleep(){
        let show = !showSleep;
        setShowSleep(show);
    }

    return(
        <div className="sleep-overview">
            <div className="sleep-content">
                <h1>Sleep</h1>
                <h3 className="sleep-title">Total Hours Slept</h3>
                <div>
                    <h1>{sleep}</h1>
                </div>
            </div>
        </div>
    )
}
