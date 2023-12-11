import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";


const CarrinhoProvider = (props) => {
    const [carrinho, setCarrinho] = useState([]);


    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;
