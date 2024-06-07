import { useAtomValue } from "jotai";
import FoodItem from "./FoodItem";
import { searchResultAtom, searchTermAtom } from "../store/searchTerm";

export default function FoodList({ items, filter }) {
  const searchTerm = useAtomValue(searchTermAtom);
  const searchResult = useAtomValue(searchResultAtom);

  if (!items) {
    return <p>Loading...</p>;
  }

  let result = items;
  if (searchTerm) result = searchResult;

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
      {result.map(
        (item) =>
          showItem(item) && <FoodItem name={item.name} date={item.date} />
      )}
    </section>
  );
}
