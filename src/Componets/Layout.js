import React from 'react'
import Header from './Header'
import Router from '../Rouets/Router'
import Footer from './Footer'
// import { Route, Routes } from 'react-router-dom'
// import Admin from '../Admin/Admin'

function Layout() {
  return (
    <div>
     
      <Header></Header>
      <div>
        <Router></Router>
      </div>
    <Footer></Footer>
  
    </div>
  )
}

export default Layout