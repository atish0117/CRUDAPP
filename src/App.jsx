import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home'
import { AddEmployee } from './pages/AddEmployee'
import { UpdateDetails } from './pages/UpdateDetails'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<AddEmployee/>} />
        <Route path="/update/:id" element={<UpdateDetails/>} />

        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
