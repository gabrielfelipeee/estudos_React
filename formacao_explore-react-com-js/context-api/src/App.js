import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UsuarioProvider from 'commom/context/Usuario';


import Login from 'pages/Login';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import CarrinhoProvider from 'commom/context/Carrinho';



function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route
            exact
            path='/'
            element={<Login />}
          />

          <Route
            path='/feira'
            element={
              <CarrinhoProvider>
                <Feira />
              </CarrinhoProvider>
            }
          />
        </Routes>
      </UsuarioProvider>

      <Routes>
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
