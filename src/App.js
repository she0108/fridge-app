import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import FoodList from "./components/FoodList";
import AddModal from "./components/AddModal";

function App() {
  const [items, setItems] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!items) {
      const storedItems = localStorage.getItem("food-list");
      if (storedItems) setItems(JSON.parse(storedItems));
      else setItems([]);
      console.log(storedItems);
    }
  }, [items]);

  function addItem(name, date, storage, category) {
    let newItems;
    setItems((items) => {
      newItems = [
        ...items,
        { name: name, date: date, storage: storage, category: category },
      ];
      saveItems(newItems);
      return newItems;
    });
  }

  function saveItems(items) {
    localStorage.setItem("food-list", JSON.stringify(items));
  }

  function deleteItem() {
    console.log("delete item");
  }

  return (
    <div className="w-screen min-h-screen relative p-5 flex flex-col gap-4">
      <Title />
      <SearchBar />
      <FilterBar name="보관" tags={["전체", "냉장", "냉동", "실온"]} />
      <FilterBar
        name="종류"
        tags={["전체", "과일/채소", "정육/계란", "유제품"]}
      />
      <section id="button-group" className="flex flex-row justify-end gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="px-1.5 py-0.5 rounded-lg bg-gray-200 text-sm"
        >
          추가
        </button>
        <button
          onClick={deleteItem}
          className="px-1.5 py-0.5 rounded-lg bg-gray-200 text-sm"
        >
          삭제
        </button>
      </section>
      <FoodList items={items} />
      {isOpen && <AddModal add={addItem} close={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
