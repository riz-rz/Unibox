import React, { useEffect, useState } from 'react'
import ProdCard from '../components/ProdCard';
import SearchBar from '../components/SearchBar';


const Products = () => {

  const [products, setProducts] = useState([])
  // console.log(products);
   const [search, setSearch] = useState("")

  const fetchProducts = async()=>{
    try {
      const res = await fetch("http://localhost:5000/products")
      const data = await res.json()
      setProducts(data.prods)

      console.log(data);
      
      
    } catch (error) {
      console.log("error while fetching prods", error);
      
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  
  const filteredProds = products.filter((prod)=>{
    return(
      prod.productName.toLowerCase().includes(search.toLowerCase())||
      prod.category.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className='min-h-screen px-20 py-10'>
        <div className='flex items-center justify-between'>
          <div>
           <h1 className='text-4xl'>Whats's in the box?</h1> <br />
           <p className='text-stone-600'>Thoughtfully designed objects, modern tech, everyday carry,</p> 
           <p className='text-stone-600'>and curated home goods sourced from independent studios.</p>
        </div>
        <div>
          <SearchBar search={search} setSearch ={setSearch}/>
        </div>
        </div>
        <div className='grid grid-cols-3 gap-10 pt-10'>
          {
            filteredProds.map((prod)=>{
              return <ProdCard key={prod._id} product={prod} />
            })
          }
        </div>
    </div>
  )
}

export default Products