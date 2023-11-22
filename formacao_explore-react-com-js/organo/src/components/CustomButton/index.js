import './styles.css';


const CustomButton = (props) => {
    return (
        <div className="container-button">
            <button>{props.children}</button>
        </div>
    )
};
export default CustomButton;