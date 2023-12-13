import React, { createContext, useContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";


const CarrinhoProvider = (props) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeDeProdutos, setQuantidadeDeProdutos] = useState(0);


    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            setCarrinho,
            quantidadeDeProdutos,
            setQuantidadeDeProdutos
        }}
        >
            {props.children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;




export const useCarrinhoContext = () => {
    const {
        carrinho,
        setCarrinho,
        quantidadeDeProdutos,
        setQuantidadeDeProdutos
    } = useContext(CarrinhoContext);




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


    useEffect(() => {
        const quantidade = carrinho.reduce((contador, produto) => 
        contador + produto.quantidade, 0);

        setQuantidadeDeProdutos(quantidade);
    }, [carrinho, setQuantidadeDeProdutos]);

    return { carrinho, setCarrinho, addProduto, removeProduto, quantidadeDeProdutos }
};
