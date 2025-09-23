// src/components/SectionFoods.jsx
import React from 'react';
import AddSavedFoodEntryForm from './AddSavedFoodEntryForm';

export default function SectionSavedFoods({ foods, date, onAddFromFood }) {
  return (
    <>
      <h3 className=""> ☞ Saved Foods</h3> 
      {foods.map((food,i) => (
        <>
        {(i === 10 || i === 19 || i=== 26 )? <p>-------------------------------------------</p> : null}
        <div className="secInline" key={i}>
          <p className="bold">{food.name}</p>
          <p>{food.calories}</p>
          <p>{food.protein}</p>
          <p>{food.per}{food.perWhat}</p>
          <AddSavedFoodEntryForm food={food} date={date} onAdd={onAddFromFood} />
        </div>    
        </> 
      ))}
    
    </>
  );
}
