import "./ActivityFeed.css"
import SummaryStat from "components/SummaryStat/SummaryStat"

export default function ActivityFeed(props){
    return (
        <div className="activity-feed">
            <div className="actNav">
                <div className="activity-nav-header">
                    <h3 className="activity-title">Activity Feed</h3>
                </div>
                <div className="activity-nav-btns">
                    <button className="activity-btns">Add Exercise</button>
                    <button className="activity-btns">Log Sleep</button>
                    <button className="activity-btns">Record Nutrition</button>
                </div>
            </div>
            <div className="per-category">
                <div className="first-row">
                    <div className="box-1">
                        <SummaryStat/>
                    </div>
                    <div className="box-1">
                        <SummaryStat/>
                    </div>
                    <div className="box-1">
                        <SummaryStat/>
                    </div>      
                </div>
                <div className="second-row">
                    <div className="box-1">
                        <SummaryStat/>
                    </div>
                    <div className="box-1">
                        <SummaryStat/>
                    </div>
                    <div className="box-1">
                        <SummaryStat/>
                    </div>     
                </div>
            </div>
        </div>
    )
}