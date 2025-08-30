import React, { useState } from "react";

export default function AddCustomMealItemForm({ onAddCustom }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");

  const handleAdd = () => {
    if (!name || !calories || !protein) return;
    onAddCustom({
      name,
      calories: parseFloat(calories),
      protein: parseFloat(protein),
    });
    // reset
    setName("");
    setCalories("");
    setProtein("");
  };

  return (
    <div>
      <h3>☞ Add a custom item</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="textInput"
      />
      <input
        placeholder="Energy"
        // type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="numericalInputs"
      />
      <input
        placeholder="Protein"
        // type="number"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        className="numericalInputs"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
