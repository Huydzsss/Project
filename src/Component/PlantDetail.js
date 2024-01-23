import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from './menu';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function PlantDetail() {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/Plants.json?id=${id}`)
      .then(response => {
        const foundplant = response.data.find(a => a.id === parseInt(id));
        setPlant(foundplant);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!plant) {
    return <div>Animal not found</div>;
  }

  return (
    <div  style={{textAlign:"center"}}>
      <Menu/>
      <h1>{plant.name}</h1>
      <img src={`${process.env.PUBLIC_URL}/${plant.img}`} alt={plant.name} />
      <h4 className='font-monospace'>- Description: {plant.Desc}</h4>
      <h5 className="card-from">from: {plant.from}</h5>
      <section className="my-0 bg-warning mt-1">
          <div className="d-flex justify-content-center container gallery bg-warning">
            <strong style={{ fontSize: "50px" }}>Gallery</strong>
          </div>
          <div className="d-flex justify-content-center flex-row container-fluid bg-warning">
            <div className="img-wrapper ">
              <img className="img-thumbnail " src={`${process.env.PUBLIC_URL}/${plant.gallery1}`} style={{ height: "500px", width: "500px" }} />
            </div>
            <div className="img-wrapper ">
              <img className="img-thumbnail " src={`${process.env.PUBLIC_URL}/${plant.gallery2}`} style={{ height: "500px", width: "500px" }} />
            </div>
          </div>
        </section>
      <Footer/>
    </div>
  );
}
