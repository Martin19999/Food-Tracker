// src/components/SectionFoods.jsx
import React from 'react';
import AddSavedFoodEntryForm from './AddSavedFoodEntryForm';
import { V1, V2, V3 } from "../defaultFoods";

export default function SectionSavedFoods({ foods, date, onAddFromFood }) {
  return (
    <>
      <h3 className=""> ☞ Saved Foods</h3> 
      {foods.map((food,i) => (
        <>
        {(i === V1 || i === V2 || i=== V3 )? <p>-------------------------------------------</p> : null}
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
