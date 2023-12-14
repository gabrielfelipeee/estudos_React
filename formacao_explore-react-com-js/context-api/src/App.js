import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UsuarioProvider from 'commom/context/Usuario';
import CarrinhoProvider from 'commom/context/Carrinho';
import PagamentoProvider from 'commom/context/Pagamento';


import Login from 'pages/Login';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';




function App() {
  const CarrinhoWrapper = ({ children }) => (
    <CarrinhoProvider>
      {children}
    </CarrinhoProvider>
  );

  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />

          <Route
            path='/feira'
            element={
              <CarrinhoWrapper>
                <Feira />
              </CarrinhoWrapper>
            }
          />

          <Route
            path='/carrinho'
            element={
              <CarrinhoWrapper>
                <PagamentoProvider>
                  <Carrinho />
                </PagamentoProvider>
              </CarrinhoWrapper>
            }
          />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
}
export default App;
