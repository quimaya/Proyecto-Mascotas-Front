import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./context/jwtContext";
import useLocalStorage from 'use-local-storage'
import RequiredAuth from "./components/RequiredAuth";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import Mascotas from "./pages/Mascotas";

import React from "react";
import InfoMascota from "./pages/InfoMascota";
import Documentacion from "./pages/Documentacion";
import './App.css'

const App = () => {
  
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <JwtContextProvider>
      <div className="App" data-theme={theme}>
        <Router>
            <button className="btn" onClick={switchTheme}>
              { theme === 'light' ? <img src="/sun.png" alt="sun" className="images"/>: <img src="/moon.png" alt="moon" className="images"/> }
            </button>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/mascotas"
              element={
                <RequiredAuth>
                  <Mascotas />
                </RequiredAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequiredAuth>
                  <Profile />
                </RequiredAuth>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/infoMascota/:nick" element={<InfoMascota />} />
            <Route path="/documentacion" element={<Documentacion />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
};

export default App;
