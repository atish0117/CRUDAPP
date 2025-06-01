import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home'
import { AddEmployee } from './pages/AddEmployee'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<AddEmployee/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
