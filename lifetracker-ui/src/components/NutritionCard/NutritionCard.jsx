import "./NutritionCard.css";

export default function NutritionCard(props){
    console.log(props.imageUrl);
    const url ="" + props.imageUrl + "";
    console.log(url);
    return (
        <div className="nutrition-card">
            <div className="card-wrapper">
                <img width={300} height={300} className="nutrition-image" src={url}></img>
                <h2 className="calories">{props.name}</h2> 
                <h2 className="calories">{props.calories}</h2>
                <h2 className="category">{props.category}</h2>
                <h2 className="created-at">{props.createdAt}</h2>
            </div>
        </div>
    )
}

