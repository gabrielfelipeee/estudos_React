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




    const mudarQuantidade = (id, quantidade) => {
        return carrinho.map(item => {
            if (item.id === id) {
                item.quantidade += quantidade;
            }
            return item;
        })
    };



    const addProduto = (novoProduto) => {
        // Ver se o produto já existe
        const temOProduto = carrinho.some(produto => produto.id === novoProduto.id);


        if (!temOProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        } else {
            setCarrinho(mudarQuantidade(novoProduto.id, 1))
        }
    };


    const removeProduto = (id) => {
        const produto = carrinho.find(item => item.id === id);

        if (produto.quantidade === 1) {
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(item => item.id !== id));
        }
        setCarrinho(mudarQuantidade(id, -1))
    }

    return { carrinho, setCarrinho, addProduto, removeProduto }
};
