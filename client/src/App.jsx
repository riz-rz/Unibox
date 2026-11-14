import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProdDetails from './pages/ProdDetails'

const App = () => {
  return (
    <div className='min-h-screen bg-[rgb(255,248,220)]'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProdDetails/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  )
}

export default App