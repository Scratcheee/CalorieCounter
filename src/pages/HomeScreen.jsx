import React, { useState } from "react";
import Counter from "../components/Counter";
import HistoryCard from "../components/HistoryCard";

function HomeScreen() {
  let totalCal = 2300;
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${month}/${day}/${year}`;

  const data = [
    { id: 1, calories: 90, entry: "snack", food: "tofu" },
    { id: 2, calories: 150, entry: "hydration", food: "soda" },
    { id: 3, calories: 250, entry: "snack", food: "cheeseburger" },
    { id: 4, calories: 600, entry: "meal", food: "mashed potatoes" },
    { id: 5, calories: 752, entry: "meal", food: "cereal" },
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    type: "",
    meal: "",
    food: "",
    hunger: "",
    calorie: 0,
  });

  const [remainingCal, setRemainingCal] = useState(totalCal);

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRemainingCal(
      (prevRemainingCal) => prevRemainingCal - selectedOptions.calorie
    );
  };

  return (
    <div className="flex flex-col">
      <div className="card bg-secondary-content  w-full max-w-xl gap-4 mt-10 mx-auto place-content-center p-10 place-items-center">
        <Counter total={totalCal} remaining={remainingCal} />
        {/*Logging Form*/}
        <div className="form-control gap-4">
          <label className="label">
            <span className="label-text text-secondary-focus">
              Food / Drink
            </span>
          </label>
          <input
            type="text"
            name="food"
            placeholder="Type here"
            className="input input-bordered w- max-w-xs"
            value={selectedOptions.food}
            onChange={handleOptionChange}
          />
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
            <label className="label">
              <span className="label-text text-secondary-focus">Type</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs font-primary"
              name="type"
              onChange={handleOptionChange}
            >
              <option disabled selected>
                Entry Type
              </option>
              <option value="hydration">Hydration</option>
              <option value="meal">Meal</option>
              <option value="snack">Snack</option>
            </select>
            <label className="label">
              <span className="label-text text-secondary-focus">Hunger</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              name="meal"
              onChange={handleOptionChange}
            >
              <option disabled selected>
                Hunger
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <br />
          <button className="btn btn-wide btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <HistoryCard data={data} date={currentDate} />
    </div>
  );
}

export default HomeScreen;
