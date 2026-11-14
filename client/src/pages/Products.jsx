import React, { useEffect, useState } from 'react'
import ProdCard from '../components/ProdCard';
import SearchBar from '../components/SearchBar';


// const initialProducts = [
//   {
//     id: 1,
//     productName: "Men's Classic Cotton T-Shirt",
//     description: "Comfortable 100% cotton casual t-shirt with a regular fit, perfect for everyday wear.",
//     price: 799,
//     discountPrice: 599,
//     category: "Clothing",
//     brand: "UrbanStyle",
//     images: [
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//       "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
//     ],
//     stock: 50,
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "White", "Blue", "Grey"],
//     ratings: 4.5,
//     numReviews: 120,
//     isFeatured: true,
//     isActive: true
//   },
//   {
//     id: 2,
//     productName: "Women's Oversized Hoodie",
//     description: "Premium fleece oversized hoodie offering warmth and comfort during colder days.",
//     price: 1499,
//     discountPrice: 1199,
//     category: "Clothing",
//     brand: "StyleHub",
//     images: [
//       "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
//       "https://images.unsplash.com/photo-1578681994506-b8f463449011"
//     ],
//     stock: 35,
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Pink", "Black", "Beige"],
//     ratings: 4.7,
//     numReviews: 85,
//     isFeatured: true,
//     isActive: true
//   },
//   {
//     id: 3,
//     productName: "Wireless Bluetooth Headphones",
//     description: "High-quality wireless headphones with noise cancellation, deep bass, and long battery life.",
//     price: 2999,
//     discountPrice: 2499,
//     category: "Electronics",
//     brand: "SoundMax",
//     images: [
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//       "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
//     ],
//     stock: 25,
//     sizes: [],
//     colors: ["Black", "White"],
//     ratings: 4.6,
//     numReviews: 210,
//     isFeatured: true,
//     isActive: true
//   },
//   {
//     id: 4,
//     productName: "Smart Watch Series X",
//     description: "Modern smartwatch featuring heart rate monitoring, fitness tracking, notifications, and multiple sports modes.",
//     price: 4999,
//     discountPrice: 4299,
//     category: "Electronics",
//     brand: "TechPro",
//     images: [
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//       "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1"
//     ],
//     stock: 18,
//     sizes: [],
//     colors: ["Black", "Silver", "Rose Gold"],
//     ratings: 4.3,
//     numReviews: 96,
//     isFeatured: false,
//     isActive: true
//   },
//   {
//     id: 5,
//     productName: "Men's Running Sneakers",
//     description: "Lightweight running shoes with breathable mesh fabric and cushioned soles for everyday training.",
//     price: 2499,
//     discountPrice: 1999,
//     category: "Footwear",
//     brand: "RunFlex",
//     images: [
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//       "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3"
//     ],
//     stock: 40,
//     sizes: ["7", "8", "9", "10", "11"],
//     colors: ["Red", "Black", "White"],
//     ratings: 4.4,
//     numReviews: 150,
//     isFeatured: true,
//     isActive: true
//   },
//   {
//     id: 6,
//     productName: "Women's Leather Handbag",
//     description: "Elegant everyday handbag with spacious compartments and a premium leather finish.",
//     price: 3499,
//     discountPrice: 2999,
//     category: "Accessories",
//     brand: "LuxeCarry",
//     images: [
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
//     ],
//     stock: 15,
//     sizes: [],
//     colors: ["Brown", "Black", "Tan"],
//     ratings: 4.8,
//     numReviews: 65,
//     isFeatured: true,
//     isActive: true
//   },
//   {
//     id: 7,
//     productName: "Premium Ceramic Coffee Mug",
//     description: "Minimalist ceramic coffee mug with a comfortable handle, ideal for home and office use.",
//     price: 499,
//     discountPrice: null,
//     category: "Home & Kitchen",
//     brand: "HomeEssentials",
//     images: [
//       "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
//       "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
//     ],
//     stock: 100,
//     sizes: [],
//     colors: ["White", "Black", "Green"],
//     ratings: 4.2,
//     numReviews: 45,
//     isFeatured: false,
//     isActive: true
//   },
//   {
//     id: 8,
//     productName: "Portable Laptop Backpack",
//     description: "Water-resistant laptop backpack with multiple compartments, padded laptop storage, and ergonomic straps.",
//     price: 1799,
//     discountPrice: 1399,
//     category: "Bags",
//     brand: "TravelMate",
//     images: [
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
//       "https://images.unsplash.com/photo-1622560480654-d96214fdc887"
//     ],
//     stock: 30,
//     sizes: [],
//     colors: ["Black", "Grey", "Navy Blue"],
//     ratings: 4.5,
//     numReviews: 110,
//     isFeatured: false,
//     isActive: true
//   },
//   {
//     id: 9,
//     productName: "Men's Slim Fit Denim Jeans",
//     description: "Stylish slim-fit denim jeans made from stretchable cotton fabric for all-day comfort.",
//     price: 1899,
//     discountPrice: 1499,
//     category: "Clothing",
//     brand: "DenimCraft",
//     images: [
//       "https://images.unsplash.com/photo-1542272604-787c3835535d",
//       "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
//     ],
//     stock: 45,
//     sizes: ["28", "30", "32", "34", "36"],
//     colors: ["Blue", "Black", "Dark Blue"],
//     ratings: 4.1,
//     numReviews: 78,
//     isFeatured: false,
//     isActive: true
//   },
//   {
//     id: 10,
//     productName: "Wireless Computer Mouse",
//     description: "Ergonomic wireless mouse with adjustable DPI, silent clicks, and reliable connectivity.",
//     price: 999,
//     discountPrice: 799,
//     category: "Electronics",
//     brand: "ClickTech",
//     images: [
//       "https://images.unsplash.com/photo-1527814050087-3793815479db",
//       "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
//     ],
//     stock: 0,
//     sizes: [],
//     colors: ["Black", "White"],
//     ratings: 4.3,
//     numReviews: 92,
//     isFeatured: false,
//     isActive: false
//   }
// ];

const Products = () => {

  const [products, setProducts] = useState([])
  // console.log(products);

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
  

  return (
    <div className='min-h-screen px-20 py-10'>
        <div className='flex items-center justify-between'>
          <div>
           <h1 className='text-4xl'>Whats's in the box?</h1> <br />
           <p className='text-stone-600'>Thoughtfully designed objects, modern tech, everyday carry,</p> 
           <p className='text-stone-600'>and curated home goods sourced from independent studios.</p>
        </div>
        <div>
          <SearchBar/>
        </div>
        </div>
        <div className='grid grid-cols-3 gap-10 pt-10'>
          {
            products.map((prod)=>{
              return <ProdCard key={prod._id} product={prod}/>
            })
          }
        </div>
    </div>
  )
}

export default Products