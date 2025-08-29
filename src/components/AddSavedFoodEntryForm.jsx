// src/components/AddSavedFoodEntryForm.jsx
import React, { useState } from "react";

export default function AddSavedFoodEntryForm({ food, date, onAdd }) {
  const [portion, setPortion] = useState("");

  const handleAdd = () => {
    const qty = parseFloat(portion) || 1; // default 1 if empty
    onAdd(date, food, qty*food.per); // parent decides what this means
    setPortion(""); // reset input
  };

  return (
    <>
      <input
        placeholder=""
        value={portion}
        onChange={(e) => setPortion(e.target.value)}
        className="numericalInputs"
      />
      <button onClick={handleAdd}>+</button>
    </>
  );
}
