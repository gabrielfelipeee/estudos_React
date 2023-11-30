import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Menu from './components/Menu';
import Banner from './components/Banner';

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} /> //
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='*' element={<div>Page not fouder</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;


/*
BrowserRouter: Envolve as rotas da sua aplicação utilizando a API de histórico do navegador;
      
Routes: Define as diferentes rotas da sua aplicação;

Route: Renderiza um determinado componente.
*/