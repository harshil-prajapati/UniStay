import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Pages  import
import Home from './pages/Home/Home'
import Hostel from './pages/Hostel/Hostel'
import Student from './pages/Student/Student'
import Admin from './pages/Admin/Admin'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/student" element={<Student />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App