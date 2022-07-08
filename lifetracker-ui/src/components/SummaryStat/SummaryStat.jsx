import "./SummaryStat.css";

export default function SummaryState(props) {

  if (props.string === "TotalCalories" && props.totalCalories.length > 0) {  
  return (
        <div className="summary-stat">
            <h3 className="stat-label">Total Calories Per Day</h3>
            <h3 className="primary-statistic">{props.totalCalories[length].totalCaloriesPerDay}</h3>
            <h3 className="secondary-statistic">{props.totalCalories[length].date}</h3>
        </div>
    )
}
if(props.string === "TotalPerCategory" && props.avgCalories.length > 0){
  let randomNum = Math.floor(Math.random() * props.avgCalories.length);
  let capitalizedName = props.avgCalories[randomNum].category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  return(   
    <div className="summary-stat">
        <h3 className="stat-label">Average Calorie Per Category</h3>
        <h3 className="primary-statistic">Name: {capitalizedName}</h3>
        <h3 className="secondary-statistic">{props.avgCalories[randomNum].avgCaloriesPerCategory.toFixed(2)}</h3>
    </div>
  )
}
if(props.string === "TotalDuration" && props.totalDuration.length > 0){
  let randomNum = Math.floor(Math.random() * props.totalDuration.length);
  let capitalizedName = props.totalDuration[randomNum].category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  return(   
    <div className="summary-stat">
        <h3 className="stat-label">Total Duration Per Category</h3>
        <h3 className="primary-statistic">Category: {capitalizedName}</h3>
        <h3 className="secondary-statistic">{props.totalDuration[randomNum].totalDurationPerCategory} Minutes</h3>
    </div>
  )
}

if(props.string === "AvgPerCategory" && props.avgDuration.length > 0){
  let randomNum = Math.floor(Math.random() * props.avgDuration.length);
  let capitalizedName = props.avgDuration[randomNum].category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  return(   
    <div className="summary-stat">
        <h3 className="stat-label">Average Duration Per Category</h3>
        <h3 className="primary-statistic">Category: {capitalizedName}</h3>
        <h3 className="secondary-statistic">{props.avgDuration[randomNum].avgDurationPerCategory} Minutes</h3>
    </div>
  )
}

if(props.string === "Sleep"){
  return(   
    <div className="summary-stat">
        <h3 className="stat-label">Total Hours Slept</h3>
        <h3 className="primary-statistic">{props.sleep}</h3>
    </div>
  )
}

  
return (
      <div className="summary-stat">
        <h3>Need's More Info</h3>
      </div>
);

}
