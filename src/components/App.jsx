import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Top from "./Top";
import Movies from "./Movies"
import Sessions from "./Sessions"
import Finish from "./Finish"
import Success from "./Success"


export default function App(){
    return(
		<BrowserRouter>
		<Top />
			<Routes>
				<Route path="/" element={<Movies />} />
				<Route path="/filme/:idFilme" element={<Sessions />} />
				<Route path="/sessao/:idSessao" element={<Finish />} />
				<Route path="/Success" element={<Success />} />
			</Routes>
		</BrowserRouter>
    );
}

