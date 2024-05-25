import FilterBar from "./components/FilterBar";
import FoodItem from "./components/FoodItem";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

function App() {
  return (
    <div className="w-screen min-h-screen p-5 flex flex-col gap-4">
      <Title />
      <SearchBar />
      <FilterBar name="보관" tags={["전체", "냉장", "냉동", "실온"]} />
      <FilterBar
        name="종류"
        tags={["전체", "과일/채소", "정육/계란", "유제품"]}
      />
      <section id="food-list" className="grid grid-cols-3 gap-3">
        <FoodItem name="딸기" dday={3} />
        <FoodItem name="식빵" dday={-1} />
        <FoodItem name="우유" dday={0} />
      </section>
    </div>
  );
}

export default App;
