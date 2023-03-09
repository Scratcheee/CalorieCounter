import React from 'react'

const Counter = (props) => {
    let progress = props.total - props.remaining
  return (
    <div className='text-secondary-focus'><div className="flex flex-col">
    {/* <div className="stat place-items-center">
      <div className="stat-title">Budget</div>
      <div className="stat-value">{props.total}</div>
      <div className="stat-desc">Calories</div>
    </div> */}
    <div className="stat place-items-center">
      <div className="stat-title">Total / Remaining</div>
      <div className="stat-value">{props.total - props.remaining} / {props.remaining}</div>
      <progress className="progress w-56" value={progress} max={props.total}></progress>
      <div className="stat-desc">Calories</div>
      
    </div>
  </div>



  </div>
  )
}

export default Counter