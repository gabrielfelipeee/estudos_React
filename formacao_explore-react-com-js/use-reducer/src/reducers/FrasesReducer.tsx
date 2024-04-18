export const ADICIONAR_FRASE: string = "ADICIONAR_FRASE";
export const EXCLUIR_FRASE: string = "EXCLUIR_FRASE";


// estado: é a lista de frases
// ações: adicionar e excluir frases

const frasesReducer = (estado: string[], acao: any): string[] => {
    switch (acao.tipo) {
        case ADICIONAR_FRASE:
            if (acao.frase.length < 20) {
                alert("Insira uma frase de pelo menos 20 caracteres");
                return estado;
            }
            if (estado.includes(acao.frase)) {
                alert("Não são permitidas frases duplicadas");
                return estado;
            }
            return [...estado, acao.frase];

        case EXCLUIR_FRASE:
            return estado.filter(frase => frase !== acao.frase)

        default:
            return estado;
    }
}
export default frasesReducer;
