import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/Vans";
import VanDetails from "./components/pages/VanDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";
import Host from "./components/pages/Host";
import Layout from "./components/Layout";

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
            <Route path="/host" element={<Host />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
