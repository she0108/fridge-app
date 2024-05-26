import FoodItem from "./FoodItem";

export default function FoodList({ items }) {
  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <section id="food-list" className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <FoodItem name={item.name} dayleft={item.dayleft} />
      ))}
    </section>
  );
}
