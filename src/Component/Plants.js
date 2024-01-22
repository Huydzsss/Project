import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./menu";
import Footer from "./Footer";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get("/Plants.json") 
      .then(response => {
        setPlants(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div >
      <Menu />
      <h1 style={{ textAlign: "center" }}>Plants Zootopia</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {plants.map(plant => (
          <div className="col" key={plant.id}>
            <div className="card">
              <Link to={`/Plants/${plant.id}`}>
                <img src={plant.img} className="card-img-top" alt={plant.name} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{plant.name}</h5>
                <h5 className="card-from">from: {plant.from}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
