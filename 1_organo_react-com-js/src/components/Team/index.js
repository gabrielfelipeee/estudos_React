import './styles.css';

const Team = (props) => {
    return (
        <section className="container-team" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.teamName}</h3>
        </section>
    )
};
export default Team;
