import './styles.css';


const Collaborator = ({image, name, job}) => {
    return (
        <div className="container-collaborator">
            <div className="header">
                <img src={image} alt="Avatar"></img>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>
    )
};
export default Collaborator;
