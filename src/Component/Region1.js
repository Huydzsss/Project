import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Menu from "./menu";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

export default function Region1(){
    const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/Region.json?id=${id}`)
      .then(response => {
        const foundrg = response.data.find(a => a.id === parseInt(id));
        setRegion(foundrg);
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
        <div className=" justify-content-center ">
            <Menu/>
            <h1 className="d-flex justify-content-center container">{region.name}</h1>
            <img src={`${process.env.PUBLIC_URL}/${region.img}`} className="img-fluid w-100"></img>
            <p>{region.name} is one of Vietnam's most famous and beautiful tourist destinations, recognized by UNESCO as a World Heritage Site. It is located in the north of the country, in Quang Ninh province, about 170 km east of Hanoi - the capital of Vietnam. Ha Long Bay is famous for its unique topography, with thousands of characteristic limestone islands emerging from the sea, creating a wonderful natural picture.
Here are some highlights about {region.name}:</p>
            <strong>1.Natural beauty:</strong>
            <br/>
            <p>{region.name} is famous for more than 1,600 limestone islands and islets, creating a majestic natural picture. Blue sea water and sharp mountain peaks create a mysterious and lyrical space.</p>
            <strong>2.Caves and animal ecosystems:</strong>
            <p>{region.name} has many magical caves such as Dau Go Cave, Thien Cung Cave, Sung Sot Cave, giving visitors interesting and attractive experiences. In addition, this sea is also home to many rich species of marine animals and plants.</p>
            <strong>3.Ideal location for seafood tourism:</strong>
            <p>{region.name}  also famous for seafood specialties such as scallops, oysters, grouper, and lobster. Visitors can enjoy delicious food and enjoy the fresh sea air.</p>
            <strong>4.Entertainment and tourism activities:</strong>
            <p>{region.name}  addition to enjoying the natural beauty, visitors also have the opportunity to participate in activities such as kayaking, visiting fishing villages at sea, scuba diving, or even visiting casinos and entertainment areas.</p>
            <strong>5.Seafood tourism route:</strong>
            <p>Tourists often join tour routes on cruise ships to explore the full beauty of {region.name} and neighboring islands. This is an opportunity to experience life at sea and enjoy meals on board.</p>
            <Footer/>
        </div>
    )
}