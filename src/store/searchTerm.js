import { atom } from "jotai";

export const searchTermAtom = atom("");

export const searchResultAtom = atom((get) => {
  const searchTerm = get(searchTermAtom);
  const storedData = localStorage.getItem("food-list");
  const storedItems = JSON.parse(storedData);
  return storedItems.filter((item) => item.name.includes(searchTerm));
});
