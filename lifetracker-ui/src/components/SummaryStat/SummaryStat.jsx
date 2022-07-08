import "./SummaryStat.css";

export default function SummaryState(props) {

if (props.string === "TotalCalories") {  
  return (
        <div className="summary-stat">
            <h3 className="stat-label">Total Calories Per Day</h3>
            <h3 className="primary-statistic">{props.totalCalories[0].totalCaloriesPerDay}</h3>
            <h3 className="secondary-statistic">{props.totalCalories[0].date}</h3>
        </div>
    )
}
if(props.string === "TotalPerCategory"){
  let randomNum = Math.floor(Math.random() * props.avgCalories.length);
  let capitalizedName = props.avgCalories[randomNum].category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  return(   
    <div className="summary-stat">
        <h3 className="stat-label">Average Calorie Per Category</h3>
        <h3 className="primary-statistic">{capitalizedName}</h3>
        <h3 className="secondary-statistic">{props.avgCalories[randomNum].avgCaloriesPerCategory.toFixed(2)}</h3>
    </div>
  )
}
  
return (
      <div className="summary-stat">
        <h3 className="stat-label">Running</h3>
        <h3 className="primary-statistic">0 Miles</h3>
        <h3 className="secondary-statistic">0 Calories</h3>
      </div>
);

}
