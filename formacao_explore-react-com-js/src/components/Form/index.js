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
    const id = props.idCollaborator;


    const [teamName, setTeamName] = useState("");
    const [teamCor, setTeamCor] = useState("");


    const WhenSaving = (event) => {
        event.preventDefault();
        // Cria um array com os valores da variáveis
        props.registeredCollaborator({
            name,
            job,
            image,
            team,
            id
        });
        setName("");
        setJob("");
        setImage("");
        setTeam("");
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
                        obligatory
                        itens={props.teams}
                        label="Time"
                        value={team}
                        whenChanging={value => setTeam(value)}
                    />
                    <CustomButton>
                        Criar card
                    </CustomButton>
                </form>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    props.registerTeam({name: teamName, color: teamCor});
                }}>
                    <h2>Preencha os dados para criar um novo time.</h2>
                    <CustomInputLabel
                        obligatory
                        label="Nome do time"
                        placeholder="Digite o nome do time"
                        inputValue={teamName}
                        whenChanging={inputValue => setTeamName(inputValue)}
                    />
                    <CustomInputLabel
                        obligatory={true}
                        type='color'
                        label="Cor do time"
                        placeholder="Digite a cor do time"
                        inputValue={teamCor}
                        whenChanging={inputValue => setTeamCor(inputValue)}
                    />
                    <CustomButton>
                        Criar um novo time
                    </CustomButton>
                </form>

            </section>
        </>
    )
}
export default Form;
