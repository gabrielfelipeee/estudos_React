import { useState } from 'react';
import './styles.css';


import CustomInputLabel from "../CustomInputLabel";
import ListDropDown from '../ListDropDown';
import CustomButton from '../CustomButton';

const Form = (props) => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");


    const WhenSaving = (event) => {
        event.preventDefault();
        // Cria um array com os valores da variáveis
        props.registeredCollaborator({
            name,
            job,
            image,
            team
        });
    };

    return (
        <>
        <section className="container-section-form">
            <form onSubmit={WhenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CustomInputLabel 
                    obligatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    inputValue={name}
                    whenChanging={inputValue => setName(inputValue)}
                    />
                <CustomInputLabel 
                    obligatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    inputValue={job}
                    whenChanging={inputValue => setJob(inputValue)}
                    />
                <CustomInputLabel 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    inputValue={image}
                    whenChanging={inputValue => setImage(inputValue)}
                    />
                <ListDropDown 
                    obligatory={true} 
                    itens={props.teams} 
                    label="Time"
                    value={team}
                    whenChanging={value => setTeam(value)}
                    />
                <CustomButton>
                    Criar card
                </CustomButton>
            </form>
        </section>
        </>
    )
}
export default Form;
