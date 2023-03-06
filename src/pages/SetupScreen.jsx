import React, { useState } from "react";

const SetupScreen = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [selectedOptions, setSelectedOptions] = useState({
    gender: "",
    activity: "",
    weightChange: "",
    startingDate: formattedDate,
    currentWeight: undefined,
    goalWeight: undefined,
    age: undefined,
    heightFt: undefined,
    heightIn: undefined,
    bmr: 0,
    edee: 0,
  });

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const calculateBMR = (selectedOptions) => {
    const heightinInches =
      parseInt(selectedOptions.heightFt) * 12 +
      parseInt(selectedOptions.heightIn);

    return Math.floor(
      4.536 * selectedOptions.currentWeight +
        15.88 * heightinInches -
        5 * selectedOptions.age +
        parseInt(selectedOptions.gender)
    );
  };

  const calculateEdee = (selectedOptions, bmr) => {
    console.log('running')
    return Math.round(bmr * parseFloat(selectedOptions.activity));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmr = calculateBMR(selectedOptions);
    setSelectedOptions((prevOptions) => ({ ...prevOptions, bmr }));
    const edee = calculateEdee(selectedOptions, bmr);
    setSelectedOptions((prevOptions) => ({ ...prevOptions, edee }));
  };

  return (
    <div className="form-control w-full max-w-xs mt-10">
      {/* Starting Date */}

      <label className="label">
        <span className="label-text">Date Starting</span>
      </label>
      <input
        type="date"
        name="startingDate"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={selectedOptions.startingDate}
        onChange={handleOptionChange}
      />
      {/* gender */}
      <label className="label">
        <span className="label-text">Gender</span>
      </label>
      <select
        className="select select-bordered"
        name="gender"
        onChange={handleOptionChange}
      >
        <option disabled selected>
          Pick one
        </option>
        <option value="5">Male</option>
        <option value="-161">Female</option>
      </select>

      {/* Current Weight */}

      <label className="label">
        <span className="label-text">Current Weight</span>
        <span className="label-text-alt">lbs</span>
      </label>
      <input
        type="number"
        name="currentWeight"
        placeholder="Type here"
        className="input input-bordered w- max-w-xs"
        value={selectedOptions.currentWeight}
        onChange={handleOptionChange}
        min={0}
      />

      {/* Height */}
      <label className="label flex ">
        <span className="label-text flex-1">Height</span>
        <span className="label-text-alt flex-1 ">ft</span>
        <span className="label-text-alt flex-2 ">in</span>
      </label>
      <div className="">
        <input
          type="number"
          name="heightFt"
          placeholder="Type here"
          className="input input-bordered w-1/2 max-w-xs "
          value={selectedOptions.heightFt}
          onChange={handleOptionChange}
          min={0}
        />

        <input
          type="number"
          name="heightIn"
          placeholder="Type here"
          className="input input-bordered w-1/2 max-w-xs"
          value={selectedOptions.heightIn}
          onChange={handleOptionChange}
          min={0}
          max={11}
        />
      </div>

      {/* Age */}

      <label className="label">
        <span className="label-text">Age</span>
      </label>
      <input
        type="number"
        name="age"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={selectedOptions.age}
        onChange={handleOptionChange}
      />

      {/* Goal Weight */}

      <label className="label">
        <span className="label-text">Goal Weight</span>
        <span className="label-text-alt">lbs</span>
      </label>
      <input
        type="number"
        name="goalWeight"
        placeholder="Type here"
        className="input input-bordered w- max-w-xs"
        value={selectedOptions.goalWeight}
        onChange={handleOptionChange}
        min={0}
      />
      {/* Weight Change */}

      <label className="label">
        <span className="label-text">Weight change goal per week</span>
      </label>
      <select
        className="select select-bordered"
        name="weightChange"
        onChange={handleOptionChange}
      >
        <option disabled selected>
          Pick one
        </option>
        <option value="-1">-1</option>
        <option value="-0.5">-0.5</option>
        <option value="0">0</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
      </select>

      {/* Activity */}

      <label className="label">
        <span className="label-text">Activity Level</span>
      </label>
      <select
        className="select select-bordered"
        name="activity"
        onChange={handleOptionChange}
      >
        <option disabled selected>
          Pick one
        </option>
        <option value="1">Sedentary</option>
        <option value="1.12">Low Activity</option>
        <option value="1.27">Active</option>
        <option value="1.45">Very Active</option>
      </select>
      <button className="btn btn-primary mt-5" onClick={handleSubmit}>
        Submit
      </button>

      <p>BMR: {selectedOptions.bmr}</p>
      <p>EDEE: {selectedOptions.edee}</p>
      <p>
        Daily Calories to eat: {parseInt(selectedOptions.weightChange) * 500 + selectedOptions.bmr}
      </p>
      <p>
        Reach your goal in: {Math.abs(
          (selectedOptions.currentWeight - selectedOptions.goalWeight) *
            selectedOptions.weightChange
        )} Weeks
      </p>
    </div>
  );
};

export default SetupScreen;
