export default function FilterBar({ name, tags, selected, selectFilter }) {
  return (
    <section id="filter-bar" className="flex flex-row items-center gap-2">
      <h5 className="pr-2 text-sm">{name}</h5>
      {["전체", ...tags].map((tag) =>
        selected === tag ? (
          <button
            key={tag}
            className="px-2.5 py-1 rounded-full text-sm bg-gray-300"
          >
            {tag}
          </button>
        ) : (
          <button
            key={tag}
            onClick={() => selectFilter(tag)}
            className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
          >
            {tag}
          </button>
        )
      )}
    </section>
  );
}
