import { useState, useEffect } from 'react';

function App() {

  const [dogsBreeds, setDogsBreeds] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:8080/dogs')
      .then(response => response.json())
      .then(data => setDogsBreeds(data))
  }, []);


  // Só vai ser executado quando  'search' for renderizado
  useEffect(() => {
    if (search && search.length > 2) {
      fetch('http://localhost:8080/dogs?nome=' + search)
        .then(response => response.json())
        .then(data => setDogsBreeds(data))
    }
  }, [search]); // search



  return (
    <div>
      <h1>Dogs</h1>
      <input type='text' placeholder='Buscar uma raça' onChange={event => setSearch(event.target.value)} />
      <ul>
        {dogsBreeds.map(breed => <li key={breed.nome}>{breed.nome}</li>)}
      </ul>

    </div>
  );
}

export default App;
