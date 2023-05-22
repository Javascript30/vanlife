import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/Vans";
import VanDetails from "./components/pages/VanDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";
// Layout (Navbar + Footer)
import Layout from "./components/Layout";

// Host stuff
import Dashboard from "./components/pages/Host/Dashboard";
import Income from "./components/pages/Host/Income";
import Reviews from "./components/pages/Host/Reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetails />} />
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/review" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
