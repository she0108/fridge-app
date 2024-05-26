export default function FoodItem({ name, dayleft }) {
  function dayleftToDday(dayleft) {
    if (dayleft > 0) return `D-${dayleft}`;
    else if (dayleft < 0) return `D+${-dayleft}`;
    else return `D-DAY`;
  }

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
        {dayleftToDday(dayleft)}
      </span>
    </div>
  );
}
