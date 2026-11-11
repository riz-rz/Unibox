import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='min-h-screen bg-[rgb(255,248,220)]'>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  )
}

export default App