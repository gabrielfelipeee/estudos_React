import './styles.css';
import CustomInputLabel from "../CustomInputLabel";

const Form = () => {
    return (
        <section className="container-section-form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CustomInputLabel label="Nome" placeholder="Digite seu nome"/>
                <CustomInputLabel label="Cargo" placeholder="Digite seu cargo"/>
                <CustomInputLabel label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}
export default Form;
