import './styles.scss';

import Button from '../Button';


const CardPost = (props) => {
    return (
        <div className='box-card-post'>
            <img src={`./assets/posts/${props.id}/cover.png`} alt="Capa do post"></img>
            <h2>{props.title}</h2>
            <Button buttonValue="Ler"/>
        </div>
    )
};
export default CardPost;
