// src/components/NewFoodForm.jsx
import React, { useState } from 'react';

export default function NewFoodForm({ onCreate }) {
  const [name, setName] = useState('');
  const [cal, setCal] = useState();
  const [prot, setProt] = useState();

  return (
    <div className="">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="textInputs"
      />
      <input
        // type="number"
        placeholder="Calories"
        value={cal}
        onChange={(e) => setCal(e.target.value)}
        className="numericalInputs"
      />
      <input
        // type="number"
        placeholder="Protein (g)"
        value={prot}
        onChange={(e) => setProt(e.target.value)}
        className="numericalInputs"
      />
      <button onClick={() => onCreate(name, parseFloat(cal), parseFloat(prot))}>
        Save
      </button>
    </div>
  );
}
