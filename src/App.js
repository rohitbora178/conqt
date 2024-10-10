import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
  <>
  <Navbar/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path='/about' element={<About />} /> */}
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App