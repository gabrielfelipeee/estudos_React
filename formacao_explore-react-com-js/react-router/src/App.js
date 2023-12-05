import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Menu from './components/Menu';
import Post from './pages/Post';
import NotFouder from './pages/NotFouder';
import ScrollToTop from './components/ScrollToTop';

import DefaultPage from './components/DefaultPage';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Menu />


        <Routes>

          // Rotas aninhadas
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} /> // mesma rota do pai
            <Route path='aboutme' element={<AboutMe />} />
            <Route path='posts/:id' element={<Post />} />
          </Route>


          <Route path='*' element={<NotFouder />} />
        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
