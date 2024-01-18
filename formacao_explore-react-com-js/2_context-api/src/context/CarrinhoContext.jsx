import { createContext } from "react";
import { useState } from "react";

const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";





const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);


    
    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                setCarrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
export { CarrinhoContext, CarrinhoProvider };
