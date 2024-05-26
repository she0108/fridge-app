import { useState } from "react";
import { getCurrentDate } from "../utils/date";

export default function AddModal({ add, close }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(getCurrentDate());

  function handleAddClick() {
    add(name, date);
    close();
  }

  return (
    <section
      id="add-modal"
      className="absolute left-0 top-0 w-full h-full bg-gray-500/30 flex justify-center items-center"
    >
      <div className="w-2/3 bg-white rounded-lg flex flex-col items-center gap-1 p-4">
        <button onClick={close} className="ml-auto">
          X
        </button>
        <img
          src="icons/default-food.png"
          alt="default icon"
          className="w-36 h-36"
        />
        <div className="flex flex-row">
          <label className="w-16 mr-2">이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-36"
          />
        </div>
        <button
          onClick={handleAddClick}
          className="px-1.5 py-0.5 mt-1 rounded-lg bg-gray-200 text-sm"
        >
          추가
        </button>
      </div>
    </section>
  );
}
