import React, { useState } from "react";

const SetupScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    gender: "",
    activity: "",
    weight: undefined,
    age: undefined,
    heightFt: undefined,
    heightIn: undefined,
  });
  const [bmr, setBmr] = useState(0);
  const [edee, setEdee] = useState(0);

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      parseInt(selectedOptions.heightFt) * 12 +
        parseInt(selectedOptions.heightIn)
    );

    if (selectedOptions.gender === "male") {
      setBmr(
        Math.round(
          4.536 * selectedOptions.weight +
            15.88 *
              (parseInt(selectedOptions.heightFt) * 12 +
                parseInt(selectedOptions.heightIn)) -
            5 * selectedOptions.age +
            5
        )
      );
    } else if (selectedOptions.gender === "female") {
      setBmr(
        Math.round(
          4.536 * selectedOptions.weight +
            15.88 *
              (parseInt(selectedOptions.heightFt) * 12 +
                parseInt(selectedOptions.heightIn)) -
            5 * selectedOptions.age -
            161
        )
      );
    }
    setEdee(Math.round(bmr * parseFloat(selectedOptions.activity)));
  };

  return (
    <div className="form-control w-full max-w-xs mt-10">
      {/* gender */}
      <label className="label">
        <span className="label-text">Gender</span>
      </label>
      <select
        className="select select-bordered"
        name="gender"
        onChange={handleOptionChange}
      >
        <option disabled selected  >Pick one</option> {/* FIX ME */}
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Weight */}

      <label className="label">
        <span className="label-text">Weight</span>
        <span className="label-text-alt">lbs</span>
      </label>
      <input
        type="number"
        name="weight"
        placeholder="Type here"
        className="input input-bordered w- max-w-xs"
        value={selectedOptions.weight}
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

      {/* Activity */}

      <label className="label">
        <span className="label-text">Activity Level</span>
      </label>
      <select
        className="select select-bordered"
        name="activity"
        onChange={handleOptionChange}
      >
        <option disabled selected>Pick one</option>
        <option value="1.2">Sedentary</option>
        <option value="1.375">Low Activity</option>
        <option value="1.55">Active</option>
        <option value="1.9">Very Active</option>
      </select>
      <button className="btn btn-primary mt-5" onClick={handleSubmit}>
        Submit
      </button>
      {/* <p>gender: {selectedOptions.gender}</p>
      <p>weight: {selectedOptions.weight}</p>
      <p>age: {selectedOptions.age}</p>
      <p>feet: {selectedOptions.heightFt}</p>
      <p>inches: {selectedOptions.heightIn}</p>

      <p>activity: {selectedOptions.activity}</p> */}

      <p>BMR: {bmr}</p>
      <p>EDEE: {edee}</p>
    </div>
  );
};

export default SetupScreen;
