import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { JwtContextProvider } from "./context/jwtContext"

import RequiredAuth from "./components/RequiredAuth"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

import Mascotas from "./pages/Mascotas"

import React from 'react'
import InfoMascota from "./pages/InfoMascota"
import Documentacion from "./pages/Documentacion"

const App = () => {
  return (
    <JwtContextProvider>
    <div>
    <Router> 
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mascotas" element={<RequiredAuth><Mascotas/></RequiredAuth>}/>
          <Route path="/profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/infoMascota/:nick" element={<InfoMascota/>}/>
          <Route path='/documentacion' element={ <Documentacion /> } />
        </Routes>
      <Footer/>
    </Router>
    </div>
    </JwtContextProvider>
  )
}

export default App