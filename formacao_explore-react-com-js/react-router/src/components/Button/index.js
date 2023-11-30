import './styles.scss';

const Button = (props) => {
    return (
        <button className='button'>
            {props.buttonValue}
        </button>
    )
};
export default Button;
