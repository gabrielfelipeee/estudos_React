import './styles.scss';

const Button = (props) => {
    return (
        <button className={`button ${props.buttonSize}`} onClick={props.event}>
            {props.buttonValue}
        </button>
    )
};
export default Button;
