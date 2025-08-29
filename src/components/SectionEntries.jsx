// src/components/SectionEntries.jsx

export default function SectionEntries({ entries, date, onDelete }) {
  return (
    <>
      <ul className="">
        {entries.map((e, i) => (
          <li key={i} className="">
            <span>{e.name}: {e.calories.toFixed(0)} cal, {e.protein.toFixed(0)} g protein</span>
            {onDelete && (
              <button onClick={() => onDelete(date, i)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}