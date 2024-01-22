import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./menu";
import Footer from "./Footer";


export default function Animals() {
    const [animals, setAnimals] = useState([]);
    
    useEffect(() => {
        axios.get("./db.json")
            .then(response => {
                setAnimals(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    return (
        <div >
            <Menu />
            <h1 style={{textAlign:"center"}}> Animals Zootopia</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                        {animals.map(animal => (
            <div className="col" key={animal.id}>
                <div className="card">
                <Link to={`/Animals/${animal.id}`}>
                    <img src={animal.img} className="card-img-top" alt={animal.name}  />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{animal.name}</h5>
                    <h5 className="card-title">Type:{animal.type}</h5>
                    <h5 className="card-title">From:{animal.from}</h5>
                </div>
                </div>
            </div>
            ))}
            </div>
            <Footer />
        </div>
    );

}