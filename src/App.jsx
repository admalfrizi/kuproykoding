import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import Navbar from './components/Navbar/Navbar';
import RoutingScreen from './components/Navbar/RoutingScreen'

function App() {
  return (
    <Router>
      <Fragment>
        <CartProvider>
          <Navbar/>
          <RoutingScreen/>
        </CartProvider>
      </Fragment>
    </Router>
  )
}

export default App
