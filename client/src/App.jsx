import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProdDetails from './pages/ProdDetails'
import HomeLayout from '../layouts/HomeLayout'
import {Toaster} from "react-hot-toast"
import UserProfile from './pages/UserProfile'


const App = () => {
  return (
    <div className='min-h-screen bg-[rgb(255,248,220)]'>
      <Toaster/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home/>}/> 
          <Route path="/user" element={<UserProfile/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProdDetails/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
        
      </Routes>

    </div>
  )
}

export default App