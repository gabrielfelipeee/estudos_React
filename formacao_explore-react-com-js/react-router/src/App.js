import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Menu from './components/Menu';

import DefaultPage from './components/DefaultPage';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />


        <Routes>

          // Rotas aninhadas
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} /> // mesma rota do pai
            <Route path='aboutme' element={<AboutMe />} />
          </Route>


          <Route path='*' element={<div>Page not fouder</div>} />
        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
