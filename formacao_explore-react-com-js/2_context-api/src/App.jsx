import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { CarrinhoProvider } from "./context/CarrinhoContext";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";



function App() {

  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProvider>

    </BrowserRouter>
  );
}

export default App;
