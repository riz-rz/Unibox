import React from 'react'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'
// import ProdDetails from './pages/ProdDetails'
import HomeLayout from './layouts/HomeLayout'
import {Toaster} from "react-hot-toast"
import UserProfile from './pages/UserProfile'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import UserMgmnt from './pages/UserMgmnt'
import ProductsMgmnt from './pages/ProductsMgmnt'
import ProtectedRoute from './components/ProtectedRoutes'
import PublicOnlyRoute from './components/PublicOnlyRoutes'


function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* Customer Facing Routes Layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />

          {/* Protected Customer Routes - Login Required */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Protected Admin Routes - Login & Role "admin" Required */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute> } >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserMgmnt />} />
          <Route path="products" element={<ProductsMgmnt />} />
        </Route>

        {/* Public-Only / Guest Routes - Redirect away if already logged in */}
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Signup />
            </PublicOnlyRoute>
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
              <h1 className="text-6xl font-bold text-gray-800">404</h1>
              <p className="mt-3 text-lg text-gray-600">The page you are looking for does not exist.</p>
              <a href="/" className="mt-6 rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
                Go to Homepage
              </a>
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App