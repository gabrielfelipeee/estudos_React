import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UsuarioContext } from 'commom/context/Usuario';



import Login from 'pages/Login';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';



function App() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);

  return (
    <BrowserRouter>
      <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
        <Routes>
          <Route
            exact
            path='/'
            element={<Login />}
          />
        </Routes>
      </UsuarioContext.Provider>
      <Routes>
        <Route
          path='/feira'
          element={<Feira />}
        />
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
