export default function FilterBar({ name, tags, selected, selectFilter }) {
  return (
    <section id="filter-bar" className="flex flex-row items-center gap-2">
      <h5 className="pr-2 text-sm whitespace-nowrap">{name}</h5>
      <div className="flex flex-row gap-2 overflow-x-auto">
        {["전체", ...tags].map((tag) =>
          selected === tag ? (
            <button
              key={tag}
              className="px-2.5 py-1 rounded-full text-sm bg-gray-300 whitespace-nowrap"
            >
              {tag}
            </button>
          ) : (
            <button
              key={tag}
              onClick={() => selectFilter(tag)}
              className="px-2.5 py-1 rounded-full text-sm bg-gray-100 whitespace-nowrap"
            >
              {tag}
            </button>
          )
        )}
      </div>
    </section>
  );
}
