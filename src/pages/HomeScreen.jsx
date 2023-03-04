import React, { useState } from "react";
import Counter from "../components/Counter";

function HomeScreen() {
  let totalCal = 2300;

  const [selectedOptions, setSelectedOptions] = useState({
    entry: "",
    meal: "",
    calorie: undefined,
  });

  const [remainingCal, setRemainingCal] = useState(totalCal);
  const [meal, setMeal] = useState({
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snack: 0,
  });

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedOptions.entry === "exercise") {
      setRemainingCal(
        (prevRemainingCal) =>
          prevRemainingCal + parseInt(selectedOptions.calorie)
      );
    } else {
      setRemainingCal(
        (prevRemainingCal) => prevRemainingCal - selectedOptions.calorie
      );

      setMeal((prevOptions) => ({
        ...prevOptions,
        [selectedOptions.meal]: selectedOptions.calorie,
      }));
    }
  };

  return (
    <div className="card bg-secondary-content  w-full max-w-xl gap-4 mt-10 mx-auto place-content-center p-10 place-items-center">
      <Counter total={totalCal} remaining={remainingCal} mealCal={meal} />
      {/*Logging Form*/}
      <div className="form-control gap-4">
        <label className="label">
          <span className="label-text text-secondary-focus">Calories</span>
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
            className="select select-bordered w-full max-w-xs font-primary"
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
