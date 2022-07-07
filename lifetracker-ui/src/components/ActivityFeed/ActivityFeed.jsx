import "./ActivityFeed.css";
import SummaryStat from "components/SummaryStat/SummaryStat";
import { useActivityContext } from "../../contexts/activity";
import { Link } from "react-router-dom";
import Loading from "components/Loading/Loading"
import { useEffect, useState } from "react";

export default function ActivityFeed(props){
    const { activity, isLoading } = useActivityContext();

if(Object.keys(activity).length > 0){
    return (
        <div className="activity-feed">
            <div className="actNav">
                <div className="activity-nav-header">
                    <h3 className="activity-title">Activity Feed</h3>
                </div>
                <div className="activity-nav-btns">
                    <button className="activity-btns">Add Exercise</button>
                    <button className="activity-btns">Log Sleep</button>
                    <Link to="/nutrition/create"><button className="activity-btns">Record Nutrition</button></Link>
                </div>
            </div>
            <div className="per-category">
                <div className="first-row">
                    <div className="box-1">
                        <SummaryStat totalCalories={activity.totalPerDay} string={"TotalCalories"}/>
                    </div>
                    <div className="box-1">
                        <SummaryStat />
                    </div>
                    <div className="box-1">
                        <SummaryStat />
                    </div>      
                </div>
                <div className="second-row">
                    <div className="box-1">
                        <SummaryStat />
                    </div>
                    <div className="box-1">
                        <SummaryStat />
                    </div>
                    <div className="box-1">
                        <SummaryStat />
                    </div>     
                </div>
            </div>
        </div>
    )
}
else{
   return(
    <div>
        <Loading />
    </div>
   )
} 
}