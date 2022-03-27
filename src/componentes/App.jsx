import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';


import Inicio from "./Inicio";
import Horario from "./Horario";
import HeaderPage from "./HeaderPage";


function App() {
  return (
    <Container>
      <HeaderPage />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/time/:filmeID" element={<Horario />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App;
const Container = styled.div`
* {
  box-sizing: border-box;
  --cor-fundo: #E5E5E5;
  --cor-fundo-card: #FFFFD4;
  --cor-nao-lembrei: #FF3030;
  --cor-quase-nao-lembrei: #FF922E;
  --cor-zap: #2FBE34;
  --preto: #333333;
}

body {
  background-color: var(--cor-fundo);
}	
`;
