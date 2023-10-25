import './styles.css';

const CustomInputLabel = (props) => {

    const whenTyped = event => {
        props.whenChanging(event.target.value);
    };

    return (
        <div className="container-input-label">
            <label>{props.label}</label>
            <input value={props.inputValue} onChange={whenTyped} required={props.obligatory} type="text" placeholder={props.placeholder}></input>
        </div>
    )
};
export default CustomInputLabel;
