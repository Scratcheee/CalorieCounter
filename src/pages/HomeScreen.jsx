import React, { useState } from "react";

function HomeScreen() {
  let totalCal = 2300;

  const [selectedOptions, setSelectedOptions] = useState({
    entry: "",
    meal: "",
    calorie: undefined,
  });

  const [remainingCal, setRemainingCal] = useState(totalCal);

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOptions.entry);
    console.log(selectedOptions.meal);
    console.log(selectedOptions.calorie);
    selectedOptions.entry === "exercise"
      ? setRemainingCal(
          (prevRemainingCal) =>
            prevRemainingCal + parseInt(selectedOptions.calorie)
        )
      : setRemainingCal(
          (prevRemainingCal) => prevRemainingCal - selectedOptions.calorie
        );
  };

  return (
    <div className="card bg-secondary/25 w-full max-w-xl gap-4 mt-10 mx-auto place-content-center p-10 place-items-center">
      <div className="stats  shadow ">
        <div className="stat place-items-center">
          <div className="stat-title">Total</div>
          <div className="stat-value">{totalCal}</div>
          <div className="stat-desc">Calories</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Remaining</div>
          <div className="stat-value">{remainingCal}</div>
          <div className="stat-desc">Calories</div>
        </div>
      </div>

      <div className="stats  shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Breakfast</div>
          <div className="stat-value">362</div>
          <div className="stat-desc">Calories</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Lunch</div>
          <div className="stat-value">362</div>
          <div className="stat-desc">Calories</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Dinner</div>
          <div className="stat-value">362</div>
          <div className="stat-desc">Calories</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Snacks</div>
          <div className="stat-value">362</div>
          <div className="stat-desc">Calories</div>
        </div>
      </div>
      {/*Logging Form*/}
      <div className="form-control gap-4">
        <label className="label">
          <span className="label-text">Calories</span>
        </label>
        <input
          type="number"
          name="calorie"
          placeholder="Type here"
          className="input input-bordered w- max-w-xs"
          min={0}
          value={selectedOptions.calorie}
          onChange={handleOptionChange}
        />
        <div className="">
          <select
            className="select select-bordered w-full max-w-xs"
            name="entry"
            onChange={handleOptionChange}
          >
            <option disabled selected>
              Entry Type
            </option>
            <option value="hydration">Hydration</option>
            <option value="food">Food</option>
            <option value="exercise">Exercise</option>
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            name="meal"
            onChange={handleOptionChange}
          >
            <option disabled selected>
              Meal Type
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
        <br />
        <button className="btn btn-wide btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
