import "./ActivityPage.css";
import { useActivityContext } from "../../contexts/activity";
import ActivityFeed from "components/ActivityFeed/ActivityFeed";
import { useEffect } from 'react';


export default function ActivityPage(props){ 
    const { isLoading, setIsLoading, reload } = useActivityContext();
    
    //Fixes bug where page wont reload after logging in.
    useEffect(() => {
        reload();
    },[])

    return(
        <div className="activity-page">
            <ActivityFeed />
        </div>
    )

}

