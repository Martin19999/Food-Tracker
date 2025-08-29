// src/components/SectionSavedMeals.jsx
import React from 'react';
import AddSavedFoodEntryForm from './AddSavedFoodEntryForm';

export default function SectionSavedMeals({ meals, date, onAddFromFood }) {
  return (
    <>
      <h3 className="">☞ Saved Meals</h3>
      {meals.map((meal, i) => (
        <div className="secInline" key={i}>
          <p className="bold">{meal.mealName}</p>
          <p>{meal.totalCalories} cal</p>
          <p>{meal.totalProtein} g</p>
          <AddSavedFoodEntryForm
            food={{ name: meal.mealName, calories: meal.totalCalories, protein: meal.totalProtein, per: 1 }}
            date={date}
            onAdd={onAddFromFood}
          />
        </div>
      ))}
    </>
  );
}
