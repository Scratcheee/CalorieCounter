import React from 'react'

const HistoryCard = (props) => {
    const {data} = props
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <h2 className="card-title">{data.meal} {data.entry}</h2>
            <p>{data.calories} calories</p>
            
          </div>
        </div>
  )
}

export default HistoryCard