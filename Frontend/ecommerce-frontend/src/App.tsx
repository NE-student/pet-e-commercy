import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './features/store'
import styled from 'styled-components'
import Navbar from './components/Navbar'

// Import pages here
const Home = () => <div>Home Page</div>
const Products = () => <div>Products Page</div>
const Cart = () => <div>Cart Page</div>
const Login = () => <div>Login Page</div>

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  )
}

export default App
