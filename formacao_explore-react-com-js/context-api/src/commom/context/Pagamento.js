import { createContext, useContext, useState } from "react";

const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

const PagamentoProvider = (props) => {
    const tiposDePagamentos = [
        {
            nome: "PIX",
            juros: 1,
            id: 1
        },
        {
            nome: "Boleto",
            juros: 1,
            id: 2
        },
        {
            nome: "Cartão de crédito",
            juros: 1.05,
            id: 3,
        },
        {
            nome: "Crediário",
            juros: 1.15,
            id: 4
        }
    ];
    const [formaPagamaneto, setFormaPagamento] = useState(tiposDePagamentos[0]);

    return (
        <PagamentoContext.Provider value={
            {
                tiposDePagamentos,
                formaPagamaneto,
                setFormaPagamento
            }
        }>
            {props.children}
        </PagamentoContext.Provider>
    )
};
export default PagamentoProvider;


const usePagamentoContext = () => {
    const {
        formaPagamaneto,
        setFormaPagamento,
        tiposDePagamentos
    } = useContext(PagamentoContext);

    const mudarPagamento = (id) => {
        const pagamentoAtual = tiposDePagamentos.find(pagamento => pagamento.id === id);
        setFormaPagamento(pagamentoAtual);
    }

    return {
        tiposDePagamentos,
        formaPagamaneto,
        mudarPagamento
    }
}




export { PagamentoContext, usePagamentoContext };