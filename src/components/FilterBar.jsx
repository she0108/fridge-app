export default function FilterBar({ name, tags }) {
  return (
    <section id="filter-bar" className="flex flex-row items-center gap-2">
      <h5 className="pr-2 text-sm">{name}</h5>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => {}}
          className="px-2.5 py-1 rounded-full text-sm bg-gray-100"
        >
          {tag}
        </button>
      ))}
    </section>
  );
}
