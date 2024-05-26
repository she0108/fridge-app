import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import DrawerContent from "./components/DrawerContent";
import { CATEGORY, STORAGE } from "./data/filter";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState({ storage: "전체", category: "전체" });
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

  function selectStorageFilter(selected) {
    if (filter.storage !== selected)
      setFilter((prev) => ({ ...prev, storage: selected }));
  }

  function selectCategoryFilter(selected) {
    if (filter.category !== selected)
      setFilter((prev) => ({ ...prev, category: selected }));
  }

  return (
    <div className="w-screen min-h-dvh relative p-5 flex flex-col gap-3">
      <Header />
      <SearchBar />
      <FilterBar
        name="보관"
        tags={STORAGE}
        selected={filter.storage}
        selectFilter={selectStorageFilter}
      />
      <FilterBar
        name="종류"
        tags={CATEGORY}
        selected={filter.category}
        selectFilter={selectCategoryFilter}
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
      <FoodList items={items} filter={filter} />
      {isOpen && (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawerContent add={addItem} close={() => setIsOpen(false)} />
        </Drawer>
      )}
    </div>
  );
}

export default App;
