import { useAtom } from "jotai";
import { searchTermAtom } from "../store/searchTerm";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
  return (
    <section id="search-bar">
      <input
        type="search"
        placeholder="찾는 식품을 검색해보세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-1 text-base rounded-lg bg-gray-100 focus:outline-none"
      />
    </section>
  );
}
