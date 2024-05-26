import FoodItem from "./FoodItem";

export default function FoodList({ items, filter }) {
  if (!items) {
    return <p>Loading...</p>;
  }

  function showItem(item) {
    let show = true;
    if (filter.storage !== "전체" && filter.storage !== item.storage)
      show = false;
    if (filter.category !== "전체" && filter.category !== item.category)
      show = false;
    return show;
  }

  return (
    <section id="food-list" className="grid grid-cols-3 gap-3">
      {items.map(
        (item) =>
          showItem(item) && <FoodItem name={item.name} date={item.date} />
      )}
    </section>
  );
}
