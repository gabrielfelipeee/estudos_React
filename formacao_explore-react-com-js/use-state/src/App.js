import React from "react";
import { useState } from "react";

function App() {

  const [address, setAddress] = useState({});

  const manipulateAddress = (event) => {
    const cep = event.target.value;
    setAddress({cep});

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          setAddress(previousAddress =>  {
            return {
              ...previousAddress, // Estado anterior do setAdress (o cep digitado)
              cidade: data.localidade,
              estado: data.uf,
            }
          })
        })
    }
  }


  return (
    <div className="App">
      <label>Digite seu CEP</label>
      <input
        type="number"
        onChange={manipulateAddress}
      />

      <ul>
        <li>CEP: {address.cep}</li>
        <li>Cidade: {address.cidade}</li>
        <li>Estado: {address.estado}</li>
      </ul>
    </div>
  );
}
export default App;
