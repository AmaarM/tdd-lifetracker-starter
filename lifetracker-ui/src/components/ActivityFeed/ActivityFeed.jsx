import "./ActivityFeed.css";
import SummaryStat from "components/SummaryStat/SummaryStat";
import { useActivityContext } from "../../contexts/activity";
import { Link } from "react-router-dom";
import Loading from "components/Loading/Loading"
import { useState } from "react";
import SleepForm from "components/SleepForm/SleepForm";


export default function ActivityFeed(props){
    const { activity, isLoading, exerciseStats, sleep, showSleep, setShowSleep, reload } = useActivityContext();
    const { isOpen, setIsOpen } = useState(false);
    
    function handleShowSleep(){ 
        let show = !showSleep;
        setShowSleep(show);
        
    }

    if(activity === undefined || activity === null){
        reload();
    }


if(Object.keys(activity).length > 0 && exerciseStats != null){
    return (
        <div className="activity-feed">
            <div className="actNav">
                <div className="activity-nav-header">
                    <h3 className="activity-title">Activity Feed</h3>
                </div>
                <div className="activity-nav-btns">
                    <Link to="/exercise/create"><button className="activity-btns">Add Exercise</button></Link>
                    <Link to="/sleep/create"><button className="activity-btns">Log Sleep</button></Link>
                    <Link to="/nutrition/create"><button className="activity-btns">Record Nutrition</button></Link>
                </div>
            </div>
            <div className="per-category">
                <div className="first-row">
                    <div className="box-1">
                        <SummaryStat totalCalories={activity.totalPerDay} string={"TotalCalories"}/>
                    </div>
                    <div className="box-1">
                        <SummaryStat totalDuration={exerciseStats.totalMinPerCat} string={"TotalDuration"}/>
                    </div>   
                </div>
                <div className="second-row">
                    <div className="box-1">
                        <SummaryStat avgCalories={activity.totalPerCategory} string={"TotalPerCategory"}/>
                    </div>
                    <div className="box-1">
                        <SummaryStat avgDuration={exerciseStats.avgMinPerCat} string={"AvgPerCategory"}/>
                    </div>   
                </div>
            </div>
            <div className="sleep">
                <div className="sleep-box">
                    {showSleep ? <button className="log-sleep" onClick={handleShowSleep}>Log Sleep</button> : ""}
                    {showSleep ? <SummaryStat sleep={sleep} string={"Sleep"}/> : <SleepForm />}
                </div>
            </div> 
        </div>
    )   
}
else{
   return(
    <div>
        <Loading />
        <Link to="/nutrition/create"><button className="activity-btns">Record Nutrition</button></Link>
    </div>
   )
} 
}