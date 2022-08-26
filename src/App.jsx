import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/profile"
import NewMascota from "./pages/NewMascota"
import Mascotas from "./pages/Mascotas"
import EditMascota from "./pages/EditMascota"


import React from 'react'

const App = () => {
  return (
    <div>
    <Router> 
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mascotas" element={<Mascotas/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create" element={<NewMascota/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/edit" element={<EditMascota/>}/>
        </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App