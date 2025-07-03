import React from 'react'
import './styles/App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <div className="app">
      <h1>Welcome to UniStay 🏨</h1>
      <p>Your hostel booking system.</p>
    </div>
    <Footer />
    </>
  )
}

export default App