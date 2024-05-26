import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import FoodList from "./components/FoodList";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (!items) {
      const storedItems = localStorage.getItem("food-list");
      if (storedItems) setItems(JSON.parse(storedItems));
      else setItems([]);
    }
  }, [items]);

  function addItem() {
    let newItems;
    setItems((items) => {
      newItems = [...items, { name: "먹을거", dayleft: 0 }];
      saveItems(newItems);
      return newItems;
    });
  }

  function saveItems(items) {
    localStorage.setItem("food-list", JSON.stringify(items));
  }

  return (
    <div className="w-screen min-h-screen p-5 flex flex-col gap-4">
      <Title />
      <SearchBar />
      <FilterBar name="보관" tags={["전체", "냉장", "냉동", "실온"]} />
      <FilterBar
        name="종류"
        tags={["전체", "과일/채소", "정육/계란", "유제품"]}
      />
      <FoodList items={items} />
      <button
        onClick={addItem}
        className="absolute right-5 bottom-5 px-3 py-1 rounded-lg bg-gray-200"
      >
        추가
      </button>
    </div>
  );
}

export default App;
