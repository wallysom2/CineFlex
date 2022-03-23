import {useState} from "react";
import "./style.css";
import image1 from "./../../assets/img/image1.jpg"
import image2 from "./../../assets/img/image2.jpg"
import image3 from "./../../assets/img/image3.jpg"
import image4 from "./../../assets/img/image4.jpg"
import image5 from "./../../assets/img/image5.jpg"
import image6 from "./../../assets/img/image6.jpg"

function Inicio() {

  return (
    <div className="Inicio">
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <h2>Selecione o filme</h2>
      <div className="filmes">
        <img src={image1} alt="Capa do filme" />
        <img src={image2} alt="Capa do filme" />
        <img src={image3} alt="Capa do filme" />
        <img src={image4} alt="Capa do filme" />
        <img src={image5} alt="Capa do filme" />
        <img src={image6} alt="Capa do filme" />
      </div>
    </div>

  )
}

export default Inicio;