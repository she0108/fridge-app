export default function SearchBar() {
  return (
    <section id="search-bar">
      <input
        type="search"
        placeholder="찾는 식품을 검색해보세요"
        className="w-full px-4 py-2 text-base rounded-lg bg-gray-100 focus:outline-none"
      />
    </section>
  );
}
