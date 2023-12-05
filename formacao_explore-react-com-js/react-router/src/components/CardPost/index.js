import { useNavigate } from 'react-router-dom';
import './styles.scss';

import Button from '../Button';


const CardPost = (props) => {
    const navigate = useNavigate();

    return (
        <div className='box-card-post'>
            <img src={`../assets/posts/${props.id}/cover.png`} alt="Capa do post"></img>
            <h2>{props.title}</h2>

            <Button
                buttonValue="Read"
                event={() => navigate(`/posts/${props.id}`)}
            />

        </div>
    )
};
export default CardPost;
