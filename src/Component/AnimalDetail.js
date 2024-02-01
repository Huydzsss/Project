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
    <div className='container-fluid p-0' style={{ textAlign: "center" }}>
  <Menu />
        <h2>{animal.name}</h2>
      <div >
        <img 
          src={`${process.env.PUBLIC_URL}/${animal.img}`} 
          alt={animal.name}
          className="img-fluid vw-100"
        />
      </div>
  <div className="row justify-content-center">
    <div className="col-md-8 text-center">
      <h2>- Type: {animal.type}</h2>
      <h2>- Status: {animal.status}</h2>
      <h2>- From: {animal.from}</h2>
      <h3 >Description: {animal.Desc}</h3>
    </div>
  </div>
  <section className="my-0 bg-warning mt-1">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <strong style={{ fontSize: "50px" }}>Gallery</strong>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 col-md-3 mb-3">
          <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/${animal.gallery1}`} alt="Gallery Image 1" />
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/${animal.gallery2}`} alt="Gallery Image 2" />
        </div>
      </div>
    </div>
  </section>
  <Footer />
</div>
  );
}
