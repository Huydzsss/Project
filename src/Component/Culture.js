import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './menu';
import Footer from './Footer';
import cul from './img/cul.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Culture() {
    const [cultures, setCultures] = useState([]);
    
    useEffect(() => {
        axios.get("./culture.json")
            .then(response => {
                setCultures(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    
    return(
        <div >
        <Menu />
        <div className="cul">
            <h2 className="d-flex justify-content-center" style={{fontSize: "50px"}}>Culture</h2>
            </div>
        <div className="pic">
      <img className="img-fluid vw-100 " 
      style={{height: "500px"}}
      src={cul}/>  
      
      </div>
            <div className="container" style={{textAlign: "center"}}>
                <strong>Zootopia not only includes natural aspects such as biodiversity and the environment,
                 but also combined with the cultural, historical, and power values of the child People with that space</strong>
            </div>

            <div className="d-flex justify-content-center container">
        <strong style={{fontSize:"30px"}}>Culture in Zootopia</strong>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
                {cultures.map(cultures => (
                    <div className="col" key={cultures.id}>
                        <div className="card">
                            <Link to={`/Culture/${cultures.id}`}>
                                <img src={cultures.img} className="card-img-top" alt={cultures.name} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{cultures.name}</h5>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <Footer/>
        </div>
    )
}