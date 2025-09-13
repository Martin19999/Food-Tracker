import { useState, useEffect } from "react";
import AddCustomMealItemForm from "../components/AddCustomMealItemForm";
import AddSavedFoodEntryForm from "../components/AddSavedFoodEntryForm";
import SectionSavedMealsForCreateMealView from "../components/SectionSavedMealsForCreateMealView";
import {formatNumber} from "../App";


export default function CreateMealView({ defaultFoods, onSave, savedMeals, onModifySavedMeals, goBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [mealName, setMealName] = useState("");
  const [items, setItems] = useState([]);

  // 
  const [quantities, setQuantities] = useState({}); // store per-food qtys
  const handleQtyChange = (i, value) => {
    setQuantities((prev) => ({
      ...prev,
      [i]: value,
    }));
  };

  // Add from default foods
  const addFromDefault = (food) => {
    setItems([...items, food]);
  };

  const totals = items.reduce(
    (acc, f) => ({
      calories: acc.calories + f.calories,
      protein: acc.protein + f.protein,
    }),
    { calories: 0, protein: 0 }
  );

  const saveMeal = () => {
    const newMeal = {
      mealName,
      items,
      totalCalories: formatNumber(totals.calories),
      totalProtein: formatNumber(totals.protein),
      per: 1,
      perWhat: "portion",
    };
    onSave(newMeal);
  };

  const [showSavedFoodsList, setShowSavedFoodsList] = useState(false);
  const [showCurrentAdded, setShowCurrentAdded] = useState(true);

  return (
    <div>
      <p></p>
      <button onClick={goBack}>Back</button>
      <h2>Create a Meal</h2>
      <input
        type="text"
        placeholder="Meal name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />

      <AddCustomMealItemForm 
        onAddCustom={(item) => setItems([...items, item])} 
      />
      
      <div>
        <h3 onClick={() => setShowSavedFoodsList(!showSavedFoodsList)}>
          ☞ Add from default foods {showSavedFoodsList ? "▼" : "▶"}</h3>
        { showSavedFoodsList && (
          <>
          {defaultFoods.map((f, i) => (
            <>
            {(i === 10 || i === 18 || i===23)? <p>-------------------------------------------</p> : null}
            <div className="secInline" key={i}>
              <p className="bold">{f.name}</p>
              <p>{f.calories} cal</p>
              <p>{f.protein} g</p>
              <p>per {f.per}{f.perWhat}</p>
              <AddSavedFoodEntryForm 
                food={f} 
                date={''} 
                onAdd={(date, f, grams) => {
                  const factor = grams / f.per; 
                  addFromDefault({
                    ...f,
                    calories: f.calories * factor,
                    protein: f.protein * factor,
                    chosenGrams: grams,
                  });
                }} 
              />

            </div>
            </>
          ))}
          </>
        )}
      </div>


      

      <h3 onClick={() => setShowCurrentAdded(!showCurrentAdded)}>☞ Current items for this meal {showCurrentAdded ? "▼" : "▶"}</h3>
      { showCurrentAdded && (
        <ul>
          {items.map((f, i) => (
            <li key={i}>
              {f.name}: {formatNumber(f.calories)} cal, {formatNumber(f.protein)} g protein
              <button
                onClick={() => {
                  const newItems = items.filter((_, idx) => idx !== i);
                  setItems(newItems);
                }}
              >Delete</button>
            </li>
          ))}
        </ul>
      )}
      

      <p>-------------------------------------------</p>
      <div className="secInlineForTol">
        <strong>Totals:</strong> {formatNumber(totals.calories)} cal, {formatNumber(totals.protein)} g protein
        <button onClick={() => {
            saveMeal();          // save the meal
            setMealName("");     // clear meal name
            setItems([]);        // clear all added items
            setQuantities({});
          }}>Save This Meal</button>
      </div>

      
      <p>-------------------------------------------</p>
      
      <SectionSavedMealsForCreateMealView
        savedMeals={savedMeals}
        onDeleteMeal={(index) => {
          const newMeals = savedMeals.filter((_, i) => i !== index);
          onModifySavedMeals(newMeals);
          localStorage.setItem("savedMeals", JSON.stringify(newMeals));
        }}
      />
    </div>
  );
}
