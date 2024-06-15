import React from 'react'
import Header from './Header'
import Router from '../Rouets/Router'
import Footer from './Footer'

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