import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const numberRef = useRef(0)
  // Será acionado cada vez que o componente ser renderizado
  useEffect(() => {
    numberRef.current += 10;
  });


  // Criar referência para um botão
  const buttonRef = useRef(); // Agora ele é um elemento DOM, pois sua referência é button
  console.log(buttonRef.current)

  useEffect(() => { // Cada vez que a página é renderizada, já acontece um click
    buttonRef.current.click();
  }, [])


  // referência do valor anterior
  const oldCountRef = useRef();
  useEffect(() => {
    oldCountRef.current = count;
  }, [count])

  return (
    <>
      <h1>O número de count é {count}</h1>
      <h1>O número anterior de count era {oldCountRef.current}</h1>
      <h1>O número do Ref é {numberRef.current}</h1>


      <button
        ref={buttonRef}
        onClick={() => setCount(prev => prev + 1)}
      >
        Click
      </button>


    </>
  )
}
export default App