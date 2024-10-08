import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import Blog from '../Pages/Blog'
import About from '../Pages/About'
import ProductDetails from '../Pages/ProductDetails'
import Carts from '../Pages/Carts'
import CheckOut from '../Pages/CheckOut'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Profile from '../Pages/Profile'
import Admin from '../Admin/Admin'
import Products from '../Componets/Products'
import AdminLogin from '../Admin/AdminLogin'
import AdminRegister from '../Admin/AdminRegister'
import Administration from '../Admin/Administration'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/carts' element={<Carts></Carts>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/admin/products' element={<Products></Products>}></Route>
        <Route path='/a-login' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/a-register' element={<AdminRegister></AdminRegister>}></Route>
        <Route path='/admin/administration' element={<Administration></Administration>}></Route>
      </Routes>
    </div>
  )
}

export default Router