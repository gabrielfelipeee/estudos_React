import { useReducer } from "react"


const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count++ }
    case "showText":
      return { ...state, showText: !state.showText }
    default:
      return state
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  });

  const handleClick = () => {
    dispatch({ type: "Increment" })
    dispatch({type: "showText"})
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Click</button>
      {state.showText && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi explicabo eaque commodi accusantium illum voluptate, a sit rem expedita eos minus nemo et tempore porro reprehenderit. Consequatur aliquid tempore neque.
      </p>}
    </>
  )
}

export default App
