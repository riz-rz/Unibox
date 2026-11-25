
import React, { useEffect, useState } from 'react'
import ProdCard from '../components/ProdCard'
import SearchBar from '../components/SearchBar'
import Sidebar from '../components/Sidebar'

const Products = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loadingProducts, setLoadingProducts] = useState(true)

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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products`)
      const data = await res.json()

      if (data.success && data.prods) {
        setProducts(data.prods)
      }
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setLoadingProducts(false)
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
    <div className='min-h-screen w-full bg-[rgb(255,248,220)] px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10'>

      {/* Header */}
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>

        <div className='w-full md:w-auto'>
          <h1 className='text-3xl sm:text-4xl'>
            What's in the box?
          </h1>

          <br className='hidden sm:block' />

          <p className='text-stone-600 text-sm sm:text-base'>
            Thoughtfully designed objects, modern tech, everyday carry,
          </p>

          <p className='text-stone-600 text-sm sm:text-base'>
            and curated home goods sourced from independent studios.
          </p>
        </div>

        <div className='w-full md:w-auto'>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

      </div>

      {/* Main Layout */}
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 pt-8 sm:pt-10'>

        <div className='w-full lg:w-64 lg:shrink-0'>
          <Sidebar
            categories={categories}
            filters={filters}
            setFilters={setFilters}
            onApply={handleApply}
            onClear={handleClear}
          />
        </div>

        {/* Products */}
        <section className='flex-1 min-w-0 w-full'>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-10'>

            {filteredProds.length > 0 ? (

              filteredProds.map(prod => (
                <ProdCard key={prod._id} product={prod} />
              ))

            ) : (

              <p className='text-stone-500 col-span-full text-center py-16 sm:py-20'>
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
