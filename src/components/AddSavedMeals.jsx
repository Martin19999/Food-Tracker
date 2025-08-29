// src/components/FoodEntryForm.jsx
import React, { useState } from 'react';

export default function AddSavedMeals({ meal, date, onAdd }) {
  const [portion, setPortion] = useState();
  return (
    <div className="divCentre">
      <input
        // type="number"
        value={portion}
        onChange={(e) => setPortion(e.target.value)}
        className="numericalInputs"
      />
      <button onClick={() => onAdd(date, meal, parseFloat(portion*meal.per))}>Add</button>
    </div>
  );
}
