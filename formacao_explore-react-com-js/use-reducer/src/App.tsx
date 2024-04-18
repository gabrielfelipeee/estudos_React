import { useReducer, useState } from "react"
import frasesReducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from "./reducers/FrasesReducer";

function App() {
  const [frase, setFrase] = useState<string>("");

  const [frases, dispatch] = useReducer(frasesReducer, []);

  const salvarFrase = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      tipo: ADICIONAR_FRASE,
      frase: frase
    })
  };
  const excluirFrase = (fraseExcluida: string) => {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <main>
      <form
        onSubmit={salvarFrase}>
        <textarea
          placeholder="Digite sua frase"
          required
          value={frase}
          onChange={event => setFrase(event.target.value)}
        >

        </textarea>
        <button type="submit">Salvar Frase</button>
      </form>
      {
        frases.map((item: string, index: number) => {
          return <p key={index}>
            {item} - <button onClick={() => excluirFrase(item)}>Excluir</button>
          </p>
        })
      }
    </main>
  )
}
export default App
