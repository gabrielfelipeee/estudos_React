import './styles.css';


const Add = (props) => {
    return(
        <div className='container-add'>
            <h4>Minha organização:</h4>
            <img src='./images/button-add.svg' onClick={props.addCollaborator}/>
        </div>
    )
};
export default Add;
