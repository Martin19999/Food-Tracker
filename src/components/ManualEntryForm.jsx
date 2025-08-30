// src/components/ManualEntryForm.jsx
import React, { useState } from 'react';

export default function ManualEntryForm({ date, onAdd }) {
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
        placeholder="Energy"
        value={cal}
        onChange={(e) => setCal(e.target.value)}
        className="numericalInputs"
      />
      <input
        // type="number"
        placeholder="Protein"
        value={prot}
        onChange={(e) => setProt(e.target.value)}
        className="numericalInputs"
      />
      <button onClick={() => {
        onAdd(date, name, parseFloat(cal), parseFloat(prot));
        setName("");
        setCal("");
        setProt("");
        
        }}>
        Add
      </button>
    </div>
  );
}
