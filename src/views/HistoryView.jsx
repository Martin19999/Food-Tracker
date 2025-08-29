import { useState } from "react";
import SectionEntries from "../components/SectionEntries";

export default function HistoryView({ entriesByDate, getTotals, goBack, onDelete }) {
  const [expandedDate, setExpandedDate] = useState(null);
  const dates = Object.keys(entriesByDate).sort().reverse();

  const toggleExpand = (date) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

  return (
    <div>
      <button className="" onClick={goBack}>Back</button>

      <div>
        <h2 className="">Daily History</h2>
        <ul className="">
          {dates.map((date) => {
            const totals = getTotals(date);
            const entries = entriesByDate[date];

            return (
              <li key={date} className="">
                {/* Date + totals (clickable) */}
                <div
                  onClick={() => toggleExpand(date)}
                  className=""
                >
                  {date}: {totals.calories.toFixed(0)} cal, {totals.protein.toFixed(0)} g protein
                </div>

                {/* Expanded entry history for this date */}
                {expandedDate === date && (
                  <div className="">
                    <SectionEntries
                      entries={entries}
                      date={date}
                      onDelete={onDelete}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
