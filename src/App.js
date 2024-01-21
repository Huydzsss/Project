import './App.css';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 import Narture from "./Component/Narture"
import Event from './Component/Event';
import Animals from './Component/Animals';
import AnimalDetail from './Component/AnimalDetail';
import Plants from './Component/Plants';
import PlantDetail from './Component/PlantDetail';
import Region from './Component/Region';
import Region1 from './Component/Region1';
import About from './Component/Aboutus';
import Culture from './Component/Culture';
import CultureDetail from './Component/CultureDetail';
import ContactUS from './Component/ContactUs';
function App () {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Narture" element={<Narture />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Animals" element={<Animals />} />
          <Route path="/Animals/:id" element={<AnimalDetail />} />
          <Route path="/Plants" element={<Plants />} />
          <Route path="/Plants/:id" element={<PlantDetail />} />
          <Route path="/Region" element={<Region />} />
          <Route path="/Region/:id" element={<Region1 />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/Culture/:id" element={<CultureDetail />} />
          <Route path="/ContactUs" element={<ContactUS />} />
        </Routes>
    </Router>
  );
};

export default App;
