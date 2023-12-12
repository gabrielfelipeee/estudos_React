import React, { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";


const CarrinhoProvider = (props) => {
    const [carrinho, setCarrinho] = useState([]);


    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;




export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    const addProduto = (novoProduto) => {
        // Ver se o produto já existe
        const temOProduto = carrinho.some(produto => produto.id === novoProduto.id);


        if (!temOProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        } else {
            setCarrinho(carrinhoAnterior => carrinhoAnterior.map(produto => {
                if (produto.id === novoProduto.id) {
                    produto.quantidade++;
                }
                return produto;
            }));
        }
    };

    return { carrinho, addProduto }
};
