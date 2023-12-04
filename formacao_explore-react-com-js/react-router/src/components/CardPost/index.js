import { Link } from 'react-router-dom';
import './styles.scss';

import Button from '../Button';


const CardPost = (props) => {
    return (
        <div className='box-card-post'>
            <img src={`./assets/posts/${props.id}/cover.png`} alt="Capa do post"></img>
            <h2>{props.title}</h2>
            <Link to={`posts/${props.id}`}>
                <Button buttonValue="Read" />
            </Link>
        </div>
    )
};
export default CardPost;
