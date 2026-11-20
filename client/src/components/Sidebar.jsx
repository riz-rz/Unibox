
import React from 'react'

const Sidebar = ({ categories, filters, setFilters, onApply, onClear }) => {

  const handleChange = (e) => {
    const { name, value } = e.target

    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <aside className="w-full lg:w-64 shrink-0">

      <div className="border-[3px] border-[#121212] rounded-xl bg-[#FCF9F8] shadow-[5px_5px_0px_#121212] p-5">

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-[#121212] pb-4">
          <h2 className="text-xl font-bold">Filters</h2>

          <button
            onClick={onClear}
            className="text-sm underline cursor-pointer"
          >
            Clear all
          </button>
        </div>

        {/* Categories */}
        <div className="py-5 border-b-2 border-[#121212]">

          <h3 className="font-bold text-lg mb-4">Categories</h3>

          <div className="space-y-3">

            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                value="all"
                checked={filters.category === "all"}
                onChange={handleChange}
                className="accent-yellow-400 w-4 h-4"
              />
              All Products
            </label>

            {categories.map(category => (
              <label
                key={category}
                className="flex items-center gap-3 text-sm cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={handleChange}
                  className="accent-yellow-400 w-4 h-4"
                />
                {category}
              </label>
            ))}

          </div>
        </div>

        {/* Price Range */}
        <div className="py-5 border-b-2 border-[#121212]">

          <h3 className="font-bold text-lg mb-4">Price Range</h3>

          <div className="flex gap-3">

            <div className="w-1/2">
              <label className="text-xs font-semibold">Min Price</label>
              <input
                type="number"
                name="minPrice"
                min="0"
                value={filters.minPrice}
                onChange={handleChange}
                placeholder="₹0"
                className="w-full border-2 border-[#121212] rounded-lg p-2 mt-1 outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="text-xs font-semibold">Max Price</label>
              <input
                type="number"
                name="maxPrice"
                min="0"
                value={filters.maxPrice}
                onChange={handleChange}
                placeholder="No limit"
                className="w-full border-2 border-[#121212] rounded-lg p-2 mt-1 outline-none"
              />
            </div>

          </div>
        </div>

        {/* Availability */}
        <div className="py-5">

          <h3 className="font-bold text-lg mb-4">Availability</h3>

          <div className="space-y-3">

            {[
              { label: "All", value: "all" },
              { label: "In Stock", value: "inStock" },
              { label: "Out of Stock", value: "outOfStock" }
            ].map(option => (

              <label
                key={option.value}
                className="flex items-center gap-3 text-sm cursor-pointer"
              >
                <input
                  type="radio"
                  name="availability"
                  value={option.value}
                  checked={filters.availability === option.value}
                  onChange={handleChange}
                  className="accent-yellow-400 w-4 h-4"
                />

                {option.label}

              </label>

            ))}

          </div>
        </div>

        {/* Apply */}
        <button
          onClick={onApply}
          className="w-full bg-[#FFD400] border-[3px] border-[#121212] rounded-lg py-3 font-bold shadow-[4px_4px_0px_#121212] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          Apply Filters
        </button>

      </div>
    </aside>
  )
}

export default Sidebar
