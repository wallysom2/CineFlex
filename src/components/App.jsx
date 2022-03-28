import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

import Top from "./Top";
import Movies from "./Movies"
import Sessions from "./Sessions"
import Finish from "./Finish"
import Success from "./Success"


export default function App(){
    return(
      <Container>
		<BrowserRouter>
		<Top />
			<Routes>
				<Route path="/" element={<Movies />} />
				<Route path="/filme/:idFilme" element={<Sessions />} />
				<Route path="/sessao/:idSessao" element={<Finish />} />
				<Route path="/Success" element={<Success />} />
			</Routes>
		</BrowserRouter>
    </Container>
    );
}

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
  background-color: #E5E5E5;
}	
`;
