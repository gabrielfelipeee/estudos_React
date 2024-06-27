import { useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("O vasco da gama é Gigante");
  const changeMessage = () => {
    setMessage("Message changed!");
  }

  return (
    <>
      <h1>Hello World</h1>
      <div>
        <p>{message}</p>
        <button
          onClick={changeMessage}
        >Change message
        </button>
      </div>
    </>
  )
}
export default App;
