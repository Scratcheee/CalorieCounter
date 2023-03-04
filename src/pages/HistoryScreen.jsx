import React from "react";
import HistoryCard from "../components/HistoryCard";

const HistoryScreen = () => {
  const data = [
    { id: 1, calories: 300, entry: "hydration", meal: "breakfast" },
    { id: 2, calories: 500, entry: "food", meal: "breakfast" },
    { id: 3, calories: 250, entry: "exercise", meal: null },
    { id: 4, calories: 600, entry: "food", meal: "lunch" },
    { id: 5, calories: 752, entry: "meal", meal: "dinner" },
  ];
  return (
    <div>
      {data.map((data) => (

        <HistoryCard data={data} key={data.id} />
      ))}
    </div>
  );
};

export default HistoryScreen;
