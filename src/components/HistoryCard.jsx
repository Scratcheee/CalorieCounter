import React from "react";

const HistoryCard = (props) => {
  const { data } = props;
  return (
    <div className="card  bg-base-100 shadow-xl my-5">
    <div className="card-body">
    <h2 className="card-title">{props.date}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food/Drink</th>
              <th>Calories</th>
              <th>Type</th>
            </tr>
          </thead>
          
          <tbody>
            {/* row 1 */}
            {data.map((data) => (
            <tr>
              <th>{data.id}</th>
              <td>{data.food.charAt(0).toUpperCase() + data.food.slice(1)}</td>
              <td>{data.calories}</td>
              <td>{data.entry.charAt(0).toUpperCase() + data.entry.slice(1)}</td>
            </tr>
               ))}
            
          </tbody>
        </table>
      </div>
       
    </div>
  </div>
  );
};

export default HistoryCard;
