import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import "./App.scss";
import Gallery from "../Component/Gallery/Gallery";
import ContactPage from "../Pages/Contact/Contact";
import StarWars from "../Pages/StarWars/StarWars";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/StarWars" element={<StarWars />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
