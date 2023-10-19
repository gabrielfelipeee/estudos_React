import './styles.css';
import CustomInputLabel from "../CustomInputLabel";
import ListDropDown from '../ListDropDown';
import CustomButton from '../CustomButton';

const Form = () => {

    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "Ux e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const WhenSaving = (event) => {
        event.preventDefault();
        console.log("");
    }

    return (
        <section className="container-section-form">
            <form onSubmit={WhenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CustomInputLabel obligatory={true} label="Nome" placeholder="Digite seu nome"/>
                <CustomInputLabel obligatory={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CustomInputLabel label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListDropDown obligatory={true} itens={teams} label="Time"/>
                <CustomButton>
                    Criar card
                </CustomButton>
            </form>
        </section>
    )
}
export default Form;
