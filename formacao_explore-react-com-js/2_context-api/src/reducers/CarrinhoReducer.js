const ADD_PRODUTO = "ADD_PRODUTO";
const REMOVE_PRODUTO = "REMOVE_PRODUTO";
const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";



{/* payload é o produto atual */ }
const carrinhoReducer = ((state, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            const novoProduto = action.payload

            {/*se o find não encontrar nenhum produto, ele devolve -1*/ }
            const produto = state.findIndex(produto => produto.id === novoProduto.id);

            if (produto === -1) {
                novoProduto.quantidade = 1;
                {/* state é o carrinho */ }
                return [...state, novoProduto];
            } else {
                return state.map((item, index) =>
                    index === produto
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }

        case REMOVE_PRODUTO:
            {/* produto atual */ }
            const produtoId = action.payload;
            return state.filter((item) => item.id !== produtoId);

        case UPDATE_QUANTIDADE:
            const { produtoId: id, quantidade } = action.payload;
            return state.map((item) =>
                item.id === id ? { ...item, quantidade } : item
            );

        default:
            return state;
    }
})
export { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE, carrinhoReducer }
