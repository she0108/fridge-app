import { calculateDaysRemaining } from "../utils/date";

function getDday(date) {
  const daysRemaining = calculateDaysRemaining(date);
  if (daysRemaining > 0) return `D-${daysRemaining}`;
  else if (daysRemaining < 0) return `D+${-daysRemaining}`;
  else return `D-DAY`;
}

export default function FoodItem({ name, date }) {
  return (
    <div
      id="food-item"
      className="p-3 rounded-lg bg-gray-100 flex flex-col items-center"
    >
      <img
        src="icons/fruit-icon.png"
        alt="food icon"
        className="mx-auto w-12 h-12 mb-2"
      />
      <p className="text-base font-medium text-center mb-1">{name}</p>
      <span className="px-1.5 rounded-full bg-gray-200 text-xs">
        {getDday(date)}
      </span>
    </div>
  );
}
