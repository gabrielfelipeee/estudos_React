import './styles.css';

import Collaborator from '../Collaborator';

const Team = (props) => {
    return (
        <section className="container-team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className="collaborators">
                {props.collaborators.map(element => <Collaborator
                    key={element.name}
                    image={element.image}
                    name={element.name}
                    job={element.job}
                />
                )}
            </div>
        </section>
    )
};
export default Team;
