import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./menu";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Region() {
  const [region, setRegion] = useState([]);

  useEffect(() => {
    axios.get("/Region.json")
      .then(response => {
        setRegion(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div >
      <Menu />
      <h1 className="d-flex justify-content-center" style={{ fontSize: "60px" }}> Region</h1>
      <div className="img-container">
        <img className="img-fluid vw-100 vh-100"  src="https://espc.com.vn/data/media/1595/images/M%C3%B9%20Cang%20Ch%E1%BA%A3i.png" />
      </div>
      <div className="d-flex justify-content-center align-items-center container">
        <strong style={{ fontSize: "30px", color: "orange" }}>At 20,000 square kilometres, Zootopia National Park is huge! To make getting around easier, the park is divided into six regions.</strong>
      </div>
      <div className="align-items-center container">
        <p>Each region offers unique habitats to explore from East Alligator (Erre), Jabiru, Jim Jim/Twin Falls, Mary River, Burrungkuy (Nourlangie), South Alligator and Yellow Water (Ngurrungurrudjba).
          You’ll experience a fascinating variety of landscapes as you travel through Zootopia.</p>
      </div>
      <div className="d-flex justify-content-center container">
        <strong style={{ fontSize: "30px" }}>Region in Zootopia</strong>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {region.map(region => (
          <div className="col" key={region.id}>
            <div className="card">
              <Link to={`/Region/${region.id}`}>
                <img src={region.img} className="card-img-top" alt={region.name} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{region.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
