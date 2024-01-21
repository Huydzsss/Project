import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import Menu from './menu';
import Footer from './Footer';
export default function AnimalDetail() {
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/db.json?id=${id}`)
      .then(response => {
        const foundAnimal = response.data.find(a => a.id === parseInt(id));
        setAnimal(foundAnimal);
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

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div className='container-fluid' style={{textAlign:"center"}}>
      <Menu/>
      <h2>{animal.name}</h2>
      <img src={`${process.env.PUBLIC_URL}/${animal.img}`} alt={animal.name} />
      <h2>- Type: {animal.type}</h2>
      <h2>- Status: {animal.status}</h2>
      <h3 className="font-monospace">Description: {animal.Desc}</h3>
      <Footer/>
    </div>
  );
}