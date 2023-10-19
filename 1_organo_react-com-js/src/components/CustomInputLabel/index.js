import './styles.css';

const CustomInputLabel = (props) => {
    return (
        <div className="container-input-label">
            <label>{props.label}</label>
            <input required={props.obligatory} type="text" placeholder={props.placeholder}></input>
        </div>
    )
};
export default CustomInputLabel;
