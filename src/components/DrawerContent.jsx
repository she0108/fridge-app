import { useState } from "react";
import { getCurrentDate } from "../utils/date";
import { CATEGORY, STORAGE } from "../data/filter";

export default function AddModal({ add, close }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(getCurrentDate());
  const [storage, setStorage] = useState("냉장");
  const [category, setCategory] = useState(null);
  const [number, setNumber] = useState(1);

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
    <div className="w-full p-10 pt-6">
      <div className="w-48 h-48 mx-auto mb-5 p-5 rounded-lg border-2 border-gray-100">
        <img
          src="icons/default-food.png"
          alt="default icon"
          className="w-36 h-36 mx-auto"
        />
      </div>
      <div className="flex flex-row justify-stretch mb-4">
        <label className="w-16 mr-4">이름</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="grow bg-gray-200 rounded"
        />
      </div>
      <div className="flex flex-row justify-stretch mb-4">
        <label className="w-16 mr-4">유통기한</label>
        <input
          required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="grow"
        />
      </div>
      <div className="flex flex-row mb-4 gap-2">
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
      <div className="flex flex-row justify-stretch items-start mb-4 gap-2">
        <label className="w-16 mr-2 shrink-0">종류</label>
        <div className="flex flex-row flex-wrap gap-2">
          {CATEGORY.map((item) =>
            category === item ? (
              <button
                key={item}
                className="px-1.5 py-0.5 rounded-full text-sm bg-gray-300 whitespace-nowrap"
              >
                {item}
              </button>
            ) : (
              <button
                key={item}
                onClick={() => handleCategoryClick(item)}
                className="px-1.5 py-0.5 rounded-full text-sm bg-gray-100 whitespace-nowrap"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
      <div className="flex flex-row justify-stretch mb-7">
        <label className="w-16 mr-4">수량</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="grow"
        />
      </div>
      <button
        onClick={handleAddClick}
        className="block mx-auto px-4 py-1 rounded-lg bg-gray-200 text"
      >
        추가
      </button>
    </div>
  );
}
