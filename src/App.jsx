import React from 'react' // from installed dependencies
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/AppNavBar/Navbar.jsx'
import About from './pages/About.jsx' // from pages 
import FillDetails from './pages/FillDetails.jsx'
import Home from './pages/Home.jsx'
import MyResume from './pages/MyResume.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/filldetails' element={<FillDetails />} />
          <Route path="/myresume" element={<MyResume />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
