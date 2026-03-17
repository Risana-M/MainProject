

function Sidebar({
  //  DEFAULT PARAMETERS:  set this ' = [] ' to prevent errors if the parent forgets to send these
  selectedCategories = [], 
  setSelectedCategories,
  selectedRating,
  setSelectedRating,
  priceRange,
  setPriceRange,
  selectedTags = [],      
  setSelectedTags,
}) {
  // Static arrays used to generate the UI elements
  const categories = ["Vegetables", "Fruits", "Leafy Greens", "Fresh Herbs", "Root Veggies"];
  const tags = ["Organic", "Farm Fresh", "Seasonal", "Best Seller"];
// RESET LOGIC: Returns all filter states to their starting values
  const handleClear = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setPriceRange(1000);
    setSelectedTags([]);
  };
// TOGGLE LOGIC: If item exists in array, remove it; if not, add it.
  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl text-gray-800">Filters</h2>
        <button onClick={handleClear} className="text-green-600 text-sm font-medium hover:text-green-700 transition">
          ClearAll
        </button>
      </div>

      {/* CATEGORY */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">

              <input
                type="checkbox"
                // The '?.' is the Optional Chaining operator. It prevents crashes!
                className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 accent-green-600 cursor-pointer"
                checked={selectedCategories?.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              <span className="text-gray-600 group-hover:text-green-600 transition text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-2">Max Price</h3>
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between mt-2 text-sm font-bold text-gray-500">
          <span>₹10</span>
          <span className="text-green-700 bg-green-50 px-2 rounded">₹{priceRange}</span>
        </div>
      </div>

      {/* RATING */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Min Rating</h3>
        <div className="space-y-3">
          {[5, 4, 3].map((r) => (
            <label key={r} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === r}
                onChange={() => setSelectedRating(r)}
                className="w-4 h-4 border-gray-300 text-green-600 focus:ring-green-500 accent-green-600"
              />
              <span className="flex items-center text-sm text-gray-600">
                {r} <span className="text-yellow-400 ml-1">★</span> <span className="ml-1 text-gray-400">& up</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* TAGS */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${selectedTags.includes(tag)
                  ? "bg-green-600 text-white shadow-md shadow-green-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;