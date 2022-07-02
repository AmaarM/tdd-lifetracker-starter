import "./NutritionCard.css";

export default function NutritionCard(props){

    const date = props.createdAt.substring(0,10);
    return (
        <div className="nutrition-card">
            <div className="card-wrapper">
                <img width={300} height={300} className="nutrition-image" src={props.imageUrl}></img>
                <h2 className="calories">Name: {props.name}</h2> 
                <h2 className="calories">Calories: {props.calories}</h2>
                <h2 className="category">Category: {props.category}</h2>
                <h2 className="created-at">Made On: {date}</h2>
            </div>
        </div>
    )
}

