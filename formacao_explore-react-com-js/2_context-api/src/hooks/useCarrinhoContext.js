import { useContext } from "react";

import CarrinhoContext from "../context/CarrinhoContext";



const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    const adicionarProduto = (novoProduto) => {
        const estaNoCarrinho = carrinho.some(produto => produto.id === novoProduto.id);

        if (!estaNoCarrinho) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        }
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(produto => {
            if (produto.id === novoProduto.id) {
                produto.quantidade++;
            }
        }))
    };

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

        const ehOUltimo = produto.quantidade === 1;
        if (ehOUltimo) {
            return setCarrinho((carrinhoAnterior) =>
                carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id)
            );
        }

        setCarrinho(carrinhoAnterior =>
            carrinhoAnterior.map(itemDoCarrinho => {
                if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade --;
                return itemDoCarrinho;
            })
        );
    }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto
    }
}
export default useCarrinhoContext;
