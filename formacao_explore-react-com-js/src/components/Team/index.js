import hexToRgba from 'hex-to-rgba';

import './styles.css';
import Collaborator from '../Collaborator';

const Team = (props) => {
    return (
        // Só retorna o time existir algum colaborador cadastrado
        // Se ter um 1 ou mais colaboradores (true), retorna a section. Se não ter (false) não faz nada
        (props.collaborators.length > 0) && <section className="container-team" style={{ backgroundColor: hexToRgba(props.color, '0.5') }}>
            <input value={props.color} type="color" onChange={(event) => props.changeColor(event.target.value, props.id)}></input>
            <h3 style={{ borderColor: props.color }}>{props.teamName}</h3>
            <div className="collaborators">
                {props.collaborators.map(element => {
                    return <Collaborator
                        color={props.color}
                        key={element.id}
                        image={element.image}
                        name={element.name}
                        job={element.job}
                        id={element.id}
                        favorite={element.favorite}
                        whenDelete={props.whenDelete}
                        whenFavorite={props.whenFavorite}
                    />
                }
                )}
            </div>
        </section>
    )
};
export default Team;
