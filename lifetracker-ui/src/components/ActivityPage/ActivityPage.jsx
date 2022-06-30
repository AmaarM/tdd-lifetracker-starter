import "./ActivityPage.css";
import { ActivityContextProvider, useActivityContext } from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/activity";
import Loading from "components/Loading/Loading";
import ActivityFeed from "components/ActivityFeed/ActivityFeed";


export default function ActivityPage(props){

    return(
        <div className="activity-page">
            <ActivityFeed />
        </div>
    )
}


//add later
//{useActivityContext().isLoading ? <Loading/> : <ActivityFeed />}