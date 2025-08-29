
export default function SectionSavedMealsForCreateMealView({ savedMeals, onDeleteMeal }) {
  return (
    <div>
      <h2>Saved Meals</h2>
      {savedMeals.length === 0 && <p>No saved meals yet.</p>}
      {savedMeals.map((meal, i) => (
        <div key={i} className="secInline">
          
          <p className="bold">{meal.mealName} {meal.totalCalories} cal, {meal.totalProtein} g</p>
          
          <button variant="destructive"
                  onClick={() => onDeleteMeal(i)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
