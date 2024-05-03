import pokemonInstance from "./helper/pokemonInstance";
import viacepInstance from "./helper/viacepInstance";
import useAxios from "./hooks/useAxios";
import { IPokemon } from "./interfaces/IPokemon";

function App() {

  // no useAxios o nome é data, mas podemos renomear aqui
  const [pokemonList, loading, error] = useAxios({
    axiosInstance: pokemonInstance,
    method: 'get',
    url: 'pokemon',
    othersConfigs: {
      headers: {}
    }
  }); 

  const [viacep, cepLoading, cepError] = useAxios({
    axiosInstance: viacepInstance,
    method: 'get',
    url: '01001000/json/',
    othersConfigs: {
      headers: {}
    }
  });
  console.log(viacep)




  return (
    <div className="box">
      {
        !loading && 
        pokemonList?.results?.map((pokemon: IPokemon, index: number) => 
        <div key={index}>{pokemon.name}</div>)
      }
    </div>
  )
}
export default App
