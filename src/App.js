function App() {
  return (
    <div className="w-screen min-h-screen p-5 flex flex-col gap-4">
      <section id="title">
        <h1 className="text-2xl font-bold">냉장고에 뭐 있지?</h1>
      </section>
      <section id="search-bar">
        <input
          type="search"
          placeholder="찾는 식품을 검색해보세요"
          className="w-full px-4 py-2 text-base rounded-lg bg-gray-100 focus:outline-none"
        />
      </section>
      <section id="filter-storage" className="flex flex-row items-center gap-2">
        <h5 className="pr-2 text-sm">보관</h5>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          전체
        </button>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          냉장
        </button>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          냉동
        </button>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          실온
        </button>
      </section>
      <section
        id="filter-category"
        className="flex flex-row items-center gap-2"
      >
        <h5 className="pr-2 text-sm">종류</h5>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          전체
        </button>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          과일/채소
        </button>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          정육/계란
        </button>
        <button
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          유제품
        </button>
      </section>
      <section id="food-list" className="grid grid-cols-3 gap-3">
        <div
          id="food-item"
          className="p-3 rounded-lg bg-gray-100 flex flex-col items-center"
        >
          <img
            src="icons/fruit-icon.png"
            alt="food icon"
            className="mx-auto w-12 h-12 mb-2"
          />
          <p className="text-base font-medium text-center mb-1">식품명</p>
          <span className="px-1.5 rounded-full bg-gray-200 text-xs">D-2</span>
        </div>
      </section>
    </div>
  );
}

export default App;
