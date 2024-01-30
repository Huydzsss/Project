import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from './menu';
import Footer from './Footer';

export default function CultureDetail() {
  const [cultural, setCultural] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/culture.json?id=${id}`)
      .then(response => {
        const foundCulture = response.data.find(a => a.id === parseInt(id));
        setCultural(foundCulture);
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

  return (
    <div style={{ textAlign: "center" }}>
      <Menu />
      <h1 className='text-danger'><strong style={{ textTransform: "uppercase" }}>unique features of zootopia culture</strong>.</h1>
      <h2>About {cultural.name}</h2>
      <img
        src={`${process.env.PUBLIC_URL}/${cultural.img}`}
        alt={cultural.name}
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      />
      <p> {cultural.Desc}</p>
      <Footer />
    </div>
  );
}
