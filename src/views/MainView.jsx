// src/views/TodayView.jsx
import "../App.css";
import SectionSavedFoods from '../components/SectionSavedFoods';
import SectionManualEntry from '../components/SectionManualEntry';
import SectionSavedMeals from '../components/SectionSavedMeals';

export default function MainView({ currentDate, foods, meals, totals, 
  onAdd, onAddFromFood, goCreateMeal,goHistory }) {
  return (
    <>
      <div className="">
        <h1 className="">Today's Totals</h1>
        <div className="secInline">
          <p>Calories: {totals.calories.toFixed(0)}</p>
          <p>Protein: {totals.protein.toFixed(0)} g</p> 
          <button className="" onClick={goHistory}>View History</button>  
        </div>    
      </div>
      <p>-------------------------------------------</p>
      <h2>Add Smth to Today :)</h2>
      <SectionManualEntry date={currentDate} onAdd={onAdd} />
      <SectionSavedFoods foods={foods} date={currentDate} onAddFromFood={onAddFromFood} />
      <SectionSavedMeals meals={meals} date={currentDate} onAddFromFood={onAddFromFood} />
      
      <p>-------------------------------------------</p>
      <button className="" onClick={goCreateMeal}>Create a meal</button>
    </>
  );
}
