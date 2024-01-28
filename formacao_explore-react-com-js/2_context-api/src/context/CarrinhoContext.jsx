import { createContext, useReducer, useState, useMemo, useEffect } from "react";



import { carrinhoReducer } from "../reducers/CarrinhoReducer";

const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";


const estadoInicial = [];

const CarrinhoProvider = ({ children }) => {
    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);


    const { totalTemp, quantidadeTemp } = useMemo(() => {
        return carrinho.reduce(
            (acc, produto) => ({
                quantidadeTemp: acc.quantidadeTemp + produto.quantidade,
                totalTemp: acc.totalTemp + produto.preco * produto.quantidade
            }),
            {
                quantidadeTemp: 0,
                totalTemp: 0
            }
        );
    }, [carrinho]);

    useEffect(() => {
        setQuantidade(quantidadeTemp);
        setValorTotal(totalTemp);
    });



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
