export default function CategoryTabs({ categories, active, onSelect }) {
  return (
    <div className="tabs">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={active === cat.id ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
