// src/views/TodayView.jsx
import "../App.css";
import SectionSavedFoods from '../components/SectionSavedFoods';
import SectionManualEntry from '../components/SectionManualEntry';
import SectionSavedMeals from '../components/SectionSavedMeals';

export default function MainView({ currentDate, foods, meals, totals, 
  onAdd, onAddFromFood, goCreateMeal,goHistory }) {

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"; // 11th–20th
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
  function formatToDDMonthWithOrdinal(dateStr) {
    const [year, month, day] = dateStr.split("-");
    const dayNum = parseInt(day, 10);

    const monthName = new Date(year, month - 1, dayNum).toLocaleString("en-GB", {
      month: "long",
    });

    return (
      <>
        {dayNum}
        <sup>{getOrdinalSuffix(dayNum)}</sup> {monthName}
      </>
    );
  }

  return (
    <>
      <div className="">
        <h1 className="">Today is: <small><i>{formatToDDMonthWithOrdinal(currentDate)}</i></small></h1>
        <div className="secInlineForTol">
          <p><b>Energy: </b>{Number(totals.calories).toFixed(0)} cal</p>
          <p><b>Protein: </b>{Number(totals.protein).toFixed(0)} g</p> 
          <button className="" onClick={goHistory}>View History</button>  
        </div>    
      </div>
      <p>-------------------------------------------</p>
      <h2>Add Smth to Today :)</h2>
      <SectionManualEntry date={currentDate} onAdd={onAdd} />
      <SectionSavedFoods foods={foods} date={currentDate} onAddFromFood={onAddFromFood} />
      <SectionSavedMeals meals={meals} date={currentDate} onAddFromFood={onAddFromFood} />
      
      <p>-------------------------------------------</p>
      <button className="" onClick={goCreateMeal}>Create a Meal</button>
      <p></p>
      <p></p>
    </>
  );
}
