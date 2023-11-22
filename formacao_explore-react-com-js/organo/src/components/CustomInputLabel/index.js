import './styles.css';

// type = "text" -> valor padrão
const CustomInputLabel = ({ type = "text", label, inputValue, obligatory, placeholder, whenChanging }) => {

    const whenTyped = event => {
        whenChanging(event.target.value);
    };

    return (
        <div className={`container-input-label input-${type}`}>
            <label>{label}</label>
            <input
                value={inputValue}
                onChange={whenTyped}
                required={obligatory}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
};
export default CustomInputLabel;
