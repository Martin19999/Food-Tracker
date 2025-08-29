// src/components/AddSavedFoodEntryForm.jsx
import React, { useState } from 'react';

export default function AddSavedFoodEntryForm({ food, date, onAdd }) {
  const [portion, setPortion] = useState("");
  return (
    <div className="divCentre">
      
      <input
        value={portion}
        onChange={(e) => setPortion(e.target.value)}
        className="numericalInputs"
      />
      
      <button
        onClick={() =>
          onAdd(date, food, parseFloat((portion || 1) * food.per))
        }
      >+</button>
    </div>
  );
}

