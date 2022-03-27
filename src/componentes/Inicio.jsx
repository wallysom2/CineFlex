import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

function Inicio() {

  const [filme, setFilme] = useState([]);

  useEffect(() => {
    const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

    requisicao.then(filmes => {
      setFilme(filmes.data);
    });
  }, []);

  return (
    <Container>
      <div className="titulo"><h2>Selecione o filme</h2></div>

      <div className="filme">
        {filme.map(filmeCartaz => <Link to={`time/${filmeCartaz.id}`}><div><img src={filmeCartaz.posterURL}/></div></Link>)}
      </div>
    </Container>
  )
}

export default Inicio;

const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2 {  
  text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 24px;
    font-family: Roboto;
 
}
.filme {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
}

.filme div {
    width: 50vw;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.filme div img {
    width: 70%;
}
`;
