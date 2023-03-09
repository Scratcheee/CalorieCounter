import React from "react";
import HistoryCard from "../components/HistoryCard";

const HistoryScreen = () => {
  const data = [
    { id: 1, calories: 90, entry: "snack", food: "tofu" },
    { id: 2, calories: 150, entry: "hydration", food: "soda" },
    { id: 3, calories: 250, entry: "snack", food: "cheeseburger" },
    { id: 4, calories: 600, entry: "meal", food: "mashed potatoes" },
    { id: 5, calories: 752, entry: "meal", food: "cerial" },
  ];
  return (
    <div>


        <HistoryCard data={data} key={data.id} />

    </div>
  );
};

export default HistoryScreen;
