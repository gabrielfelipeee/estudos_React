import { useContext } from "react";

import { CarrinhoContext } from "../context/CarrinhoContext";



const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);


    const mudarQuantidade = (id, quantidade) => {
        return carrinho.map(produto => {
            if (produto.id === id) {
                produto.quantidade += quantidade;
                return produto;
            }
        })
    }


    const adicionarProduto = (novoProduto) => {
        const estaNoCarrinho = carrinho.some(produto => produto.id === novoProduto.id);

        if (!estaNoCarrinho) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        }

        const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);
        setCarrinho([...carrinhoAtualizado]);
    };

    const removerProduto = (id) => {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

        const ehOUltimo = produto.quantidade === 1;
        if (ehOUltimo) {
            return setCarrinho((carrinhoAnterior) =>
                carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id)
            );
        }

        const carrinhoAtualizado = mudarQuantidade(id, -1);
        setCarrinho([...carrinhoAtualizado]);
    }

    const deletarProduto = (id) => {
        const produtos = carrinho.filter(produto => produto.id !== id);
        return setCarrinho(produtos);
    }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        deletarProduto
    }
}
export default useCarrinhoContext;
