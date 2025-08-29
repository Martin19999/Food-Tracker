// src/components/SectionManual.jsx
import React from 'react';
import ManualEntryForm from './ManualEntryForm';

export default function SectionManualEntry({ date, onAdd }) {
  return (
    <div>
      <h3 className="">☞ Quick Add</h3>
      <ManualEntryForm date={date} onAdd={onAdd} />
    </div>
  );
}
