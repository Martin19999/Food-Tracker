
export default function SectionSavedMealsForCreateMealView({ savedMeals, onDeleteMeal }) {
  return (
    <div>
      <h2>Saved Meals</h2>
      {savedMeals.length === 0 && <p>No saved meals yet.</p>}
      {savedMeals.map((meal, i) => (
        <div key={i} className="secInline">
          
          <p><b>{meal.mealName}</b></p>
          <p>{meal.totalCalories}cal</p>
          <p>{meal.totalProtein}g</p>
          <button variant="destructive"
                  onClick={() => onDeleteMeal(i)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
