// src/App.jsx
import { useState, useEffect } from "react";
import MainView from "./views/MainView";
import HistoryView from "./views/HistoryView";
import CreateMealView from "./views/CreateMealView";
import { defaultFoods } from "./defaultFoods";

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

export default function App() {
  const [currentDate, setCurrentDate] = useState(getToday());
  useEffect(() => {
    setCurrentDate(getToday());
  }, []);

  // Entries

  const [entriesByDate, setEntriesByDate] = useState(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entriesByDate")) || {};
    return savedEntries;
  });

  const [totalsByDate, setTotalsByDate] = useState(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entriesByDate")) || {};
    const totals = {};
    for (const date in savedEntries) {
      const list = savedEntries[date];
      totals[date] = list.reduce(
        (acc, e) => ({
          calories: acc.calories + e.calories,
          protein: acc.protein + e.protein,
        }),
        { calories: 0, protein: 0 }
      );
    }
    return totals;
  });


  useEffect(() => {
    localStorage.setItem("entriesByDate", JSON.stringify(entriesByDate));
    localStorage.setItem("totalsByDate", JSON.stringify(totalsByDate));
  }, [entriesByDate, totalsByDate]);

  const getEntries = (date) => entriesByDate[date] || [];

  const recalcTotals = (list) =>
    list.reduce(
      (acc, e) => ({
        calories: acc.calories + e.calories,
        protein: acc.protein + e.protein,
      }),
      { calories: 0, protein: 0 }
    );

  const addEntry = (date, name, calories, protein) => {
    const list = getEntries(date);
    const newEntries = [...list, { name, calories, protein }];
    setEntriesByDate({ ...entriesByDate, [date]: newEntries });
    setTotalsByDate({ ...totalsByDate, [date]: recalcTotals(newEntries) });
  };

  const deleteEntry = (date, index) => {
    const list = getEntries(date);
    const newEntries = list.filter((_, i) => i !== index);
    setEntriesByDate({ ...entriesByDate, [date]: newEntries });
    setTotalsByDate({ ...totalsByDate, [date]: recalcTotals(newEntries) });
  };

  // Meals
  const [savedMeals, setSavedMeals] = useState([]);
  useEffect(() => {
    const meals = JSON.parse(localStorage.getItem("savedMeals")) || [];
    setSavedMeals(meals);
  }, []);

  const createMealCard = (meal) => {
    const newMeals = [...savedMeals, meal];
    setSavedMeals(newMeals);
    localStorage.setItem("savedMeals", JSON.stringify(newMeals));
  };

  // Total display on MainView
  const getTotals = (date) => totalsByDate[date] || { calories: 0, protein: 0 };

  // Add from Food or meals
  const addFromFood = (date, food, grams) => {
    const calories = (food.calories / food.per) * grams;
    const protein = (food.protein / food.per) * grams;
    addEntry(date, `${Number(grams).toFixed(0)}${food.perWhat }${food.name}`, calories, protein);
  };

  // UI state for switching views
  const [view, setView] = useState("today"); // today | history | day
  const [viewDate, setViewDate] = useState(getToday());

  return (
    <div className="">
      {view === "today" && (
        <MainView
          currentDate={currentDate}
          foods={defaultFoods}
          meals={savedMeals}
          totals={getTotals(currentDate)}
          onAdd={addEntry}
          onAddFromFood={addFromFood}
          goCreateMeal={() => setView("createMeal")}
          goHistory={() => setView("history")}
        />
      )}

      {view === "history" && (
        <HistoryView
          entriesByDate={entriesByDate}
          getTotals={getTotals}
          detailedEntries={getEntries(currentDate)}
          goBack={() => setView("today")}
          onDelete={deleteEntry}
        />
      )}

      {view === "createMeal" && (
        <CreateMealView
          defaultFoods={defaultFoods}
          onSave={createMealCard}
          savedMeals={savedMeals}
          onModifySavedMeals={setSavedMeals}
          goBack={() => setView("today")}
        />
      )}
    </div>
  );
}
