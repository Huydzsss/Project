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
      <Footer/>
    </div>
  );
}
