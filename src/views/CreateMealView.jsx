import { useState } from "react";
import AddCustomMealItemForm from "../components/AddCustomMealItemForm";
import SectionSavedMealsForCreateMealView from "../components/SectionSavedMealsForCreateMealView";


export default function CreateMealView({ defaultFoods, onSave, savedMeals, onModifySavedMeals, goBack }) {
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
      totalCalories: totals.calories,
      totalProtein: totals.protein,
    };
    onSave(newMeal);
  };

  const [showSavedFoodsList, setShowSavedFoodsList] = useState(false);
  const [showCurrentAdded, setShowCurrentAdded] = useState(false);

  return (
    <div>
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
              <div key={i}>
                <span>
                  {f.name} ({f.calories} cal, {f.protein} g protein) per {f.per}g
                </span>
                <input
                  value={quantities[i] || ""}
                  onChange={(e) => handleQtyChange(i, e.target.value)}
                  placeholder="grams"
                  style={{ width: "80px", marginLeft: "8px" }}
                />
                <button
                  onClick={() => {
                    const grams = parseFloat(quantities[i]);
                    if (!grams || grams <= 0) return;

                    const factor = grams / f.per;
                    addFromDefault({
                      ...f,
                      calories: f.calories * factor,
                      protein: f.protein * factor,
                      chosenGrams: grams,
                    });

                    // clear after adding
                    handleQtyChange(i, "");
                  }}
                >
                  +
                </button>
              </div>
            ))}
          </>
        )}
      </div>


      

      <h3 onClick={() => setShowCurrentAdded(!showCurrentAdded)}>☞ Current Items for the meal {showCurrentAdded ? "▼" : "▶"}</h3>
      { showCurrentAdded && (
        <ul>
          {items.map((f, i) => (
            <li key={i}>
              {f.name}: {f.calories} cal, {f.protein} g protein
            </li>
          ))}
        </ul>
      )}
      

      <p>-------------------------------------------</p>
      <div className="secInline">
        <strong>Totals:</strong> {totals.calories} cal, {totals.protein} g protein
        <button onClick={saveMeal}>Save Meal</button>
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
