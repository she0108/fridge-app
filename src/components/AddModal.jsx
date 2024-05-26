import { useState } from "react";
import { getCurrentDate } from "../utils/date";
import { CATEGORY, STORAGE } from "../data/filter";

export default function AddModal({ add, close }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(getCurrentDate());
  const [storage, setStorage] = useState("냉장");
  const [category, setCategory] = useState(null);

  function handleAddClick() {
    add(name, date, storage, category);
    close();
  }

  function handleStorageClick(clicked) {
    if (clicked !== storage) setStorage(clicked);
  }

  function handleCategoryClick(clicked) {
    if (clicked !== category) setCategory(clicked);
  }

  return (
    <div className="w-3/4 bg-white rounded-lg flex flex-col gap-1 p-4">
      <button onClick={close} className="ml-auto">
        X
      </button>
      <img
        src="icons/default-food.png"
        alt="default icon"
        className="w-36 h-36 mx-auto"
      />
      <div className="flex flex-row">
        <label className="w-16 mr-2">이름</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-36"
        />
      </div>
      <div className="flex flex-row justify-stretch">
        <label className="w-16 mr-2">유통기한</label>
        <input
          required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-36"
        />
      </div>
      <div>
        <label className="w-16 mr-2">보관방법</label>
        {STORAGE.map((item) =>
          storage === item ? (
            <button
              key={item}
              className="px-1.5 py-0.5 rounded-full text-sm bg-gray-300"
            >
              {item}
            </button>
          ) : (
            <button
              key={item}
              onClick={() => handleStorageClick(item)}
              className="px-1.5 py-0.5 rounded-full text-sm bg-gray-100"
            >
              {item}
            </button>
          )
        )}
      </div>
      <div>
        <label className="w-16 mr-2">종류</label>
        {CATEGORY.map((item) =>
          category === item ? (
            <button
              key={item}
              className="px-1.5 py-0.5 rounded-full text-sm bg-gray-300"
            >
              {item}
            </button>
          ) : (
            <button
              key={item}
              onClick={() => handleCategoryClick(item)}
              className="px-1.5 py-0.5 rounded-full text-sm bg-gray-100"
            >
              {item}
            </button>
          )
        )}
      </div>
      <button
        onClick={handleAddClick}
        className="px-1.5 py-0.5 mt-1 mx-auto rounded-lg bg-gray-200 text-sm"
      >
        추가
      </button>
    </div>
  );
}
