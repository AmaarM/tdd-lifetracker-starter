import "./ExerciseCard.css";

export default function ExerciseCard(props){
    
    const date = props.createdAt.substring(0,10);
    let capitalizedName = props.name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let captalizedCategory = props.category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    return (
        <div className="exercise-card">
            <div className="exercise-card-wrapper">
                <div className="card-header">
                    <h4 className="name">{capitalizedName}</h4> 
                </div>
                <div className="card-stats">
                <div>
                    <h5 className="stats-title">Duration</h5>
                    <h4 className="duration">{props.duration} Minutes</h4>
                </div>
                <div>
                    <h5 className="stats-title">Category</h5>
                    <h4 className="category">{captalizedCategory}</h4>
                </div>
                </div>
                <div className="card-meta">
                    <h4 className="created-at">Made On: {date}</h4>
                </div>
            </div>
        </div>
    )
}
