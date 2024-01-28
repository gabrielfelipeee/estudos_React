import { useContext } from "react";

import { CarrinhoContext } from "../context/CarrinhoContext";
import {
    ADD_PRODUTO,
    REMOVE_PRODUTO,
    UPDATE_QUANTIDADE
} from "../reducers/CarrinhoReducer";


const addProdutoAction = (novoProduto) => {
    return {
        type: ADD_PRODUTO,
        payload: novoProduto
    }
}

const removeProdutoAction = (produtoId) => ({
    type: REMOVE_PRODUTO,
    payload: produtoId,
  });
  
  const updateQuantidadeAction = (produtoId, quantidade) => ({
    type: UPDATE_QUANTIDADE,
    payload: { produtoId, quantidade },
  });

  
const useCarrinhoContext = () => {
    const {
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
    } = useContext(CarrinhoContext);


    const adicionarProduto = (novoProduto) => {
        dispatch(addProdutoAction(novoProduto));
    };

    const removerProduto = (id) => {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

        if (produto && produto.quantidade > 1) {
            return dispatch(updateQuantidadeAction(id, produto.quantidade -1));
        } else {
            dispatch(removeProdutoAction(id))
        }
    };

    const deletarProduto = (id) => {
        dispatch(removeProdutoAction(id))
    };


    return {
        carrinho,
        adicionarProduto,
        removerProduto,
        deletarProduto,
        quantidade,
        valorTotal
    }
}
export { useCarrinhoContext };
