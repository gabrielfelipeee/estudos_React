import { AiFillCloseCircle } from "react-icons/ai";
import './styles.css';


const Collaborator = ({ image, name, job, color, id, whenDelete}) => {
    return (
        <div className="container-collaborator">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => {whenDelete(id)}}
            />
            <div className="header" style={{ backgroundColor: color }}>
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
