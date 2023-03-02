import React from 'react'

const Counter = (props) => {
    let progress = props.total - props.remaining
  return (
    <div><div className="flex flex-col">
    <div className="stat place-items-center">
      <div className="stat-title">Budget</div>
      <div className="stat-value">{props.total}</div>
      <div className="stat-desc">Calories</div>
    </div>
    <div className="stat place-items-center">
      <div className="stat-title">Total / Remaining</div>
      <div className="stat-value">{props.total - props.remaining} / {props.remaining}</div>
      <progress className="progress w-56" value={progress} max={props.total}></progress>
      <div className="stat-desc">Calories</div>
    </div>
  </div>


  <div className="flex">
    <div className="stat place-items-center px-2">
      <div className="stat-title">Breakfast</div>
      <div className="stat-value">{props.mealCal.breakfast}</div>
      <div className="stat-desc">Calories</div>
    </div>

    <div className="stat place-items-center px-2 ">
      <div className="stat-title">Lunch</div>
      <div className="stat-value">{props.mealCal.lunch}</div>
      <div className="stat-desc">Calories</div>
    </div>

    <div className="stat place-items-center px-2 ">
      <div className="stat-title">Dinner</div>
      <div className="stat-value">{props.mealCal.dinner}</div>
      <div className="stat-desc">Calories</div>
    </div>

    <div className="stat place-items-center px-2 ">
      <div className="stat-title">Snacks</div>
      <div className="stat-value">{props.mealCal.snack}</div>
      <div className="stat-desc">Calories</div>
    </div>
  </div></div>
  )
}

export default Counter