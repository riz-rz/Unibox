
import React, { useEffect, useState } from 'react'
import ProdCard from '../components/ProdCard'
import SearchBar from '../components/SearchBar'
import Sidebar from '../components/Sidebar'

const Products = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  // Filter states
  const initialFilters = {
    category: "all",
    minPrice: "",
    maxPrice: "",
    availability: "all"
  }

  const [filters, setFilters] = useState(initialFilters)
  const [appliedFilters, setAppliedFilters] = useState(initialFilters)

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products")
      const data = await res.json()

      setProducts(data.prods)

    } catch (error) {
      console.log("error while fetching prods", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Get categories dynamically from products
  const categories = [
    ...new Set(products.map(prod => prod.category))
  ]

  // Apply search and filters
  const filteredProds = products.filter(prod => {

    const matchesSearch =
      prod.productName.toLowerCase().includes(search.toLowerCase()) ||
      prod.category.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      appliedFilters.category === "all" ||
      prod.category === appliedFilters.category

    const matchesMinPrice =
      appliedFilters.minPrice === "" ||
      prod.price >= Number(appliedFilters.minPrice)

    const matchesMaxPrice =
      appliedFilters.maxPrice === "" ||
      prod.price <= Number(appliedFilters.maxPrice)

    const matchesAvailability =
      appliedFilters.availability === "all" ||
      (appliedFilters.availability === "inStock" && prod.stock > 0) ||
      (appliedFilters.availability === "outOfStock" && prod.stock === 0)

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesAvailability
    )
  })

  // Apply button
  const handleApply = () => {
    setAppliedFilters({ ...filters })
  }

  // Clear all filters
  const handleClear = () => {
    setFilters(initialFilters)
    setAppliedFilters(initialFilters)
  }

  return (
    <div className='min-h-screen px-10 lg:px-20 py-10'>

      {/* Header */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-5'>

        <div>
          <h1 className='text-4xl'>What's in the box?</h1>
          <br />

          <p className='text-stone-600'>
            Thoughtfully designed objects, modern tech, everyday carry,
          </p>

          <p className='text-stone-600'>
            and curated home goods sourced from independent studios.
          </p>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

      </div>

      {/* Main Layout */}
      <div className='flex flex-col lg:flex-row gap-10 pt-10'>

        <Sidebar
          categories={categories}
          filters={filters}
          setFilters={setFilters}
          onApply={handleApply}
          onClear={handleClear}
        />

        {/* Products */}
        <section className='flex-1 min-w-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>

            {filteredProds.length > 0 ? (

              filteredProds.map(prod => (
                <ProdCard key={prod._id} product={prod} />
              ))

            ) : (

              <p className='text-stone-500 col-span-full text-center py-20'>
                No products found. Try changing your filters!
              </p>

            )}

          </div>

        </section>

      </div>

    </div>
  )
}

export default Products
