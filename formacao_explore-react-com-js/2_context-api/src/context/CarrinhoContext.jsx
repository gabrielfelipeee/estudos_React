import { createContext, useReducer, useState } from "react";



import { carrinhoReducer } from "../reduces/CarrinhoReducer";

const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";


const estadoInicial = [];

const CarrinhoProvider = ({ children }) => {
    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                dispatch,
                quantidade,
                valorTotal,
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
export { CarrinhoContext, CarrinhoProvider };
