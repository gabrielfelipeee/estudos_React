import styles from './Card.module.css';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";


import Title from '../Title';

import useFavoritesContext from '../../hooks/useFavoritesContext';

const Card = ({ titulo, capa, id, link }) => {
    const { addFavorite, isFavorited } = useFavoritesContext();

    const handleFavoriteClick = () => {
        addFavorite({ titulo, capa, id, link });
    };


    return (
        <div className={styles.card}>
            <img src={capa} alt={`Capa do vídeo: ${titulo}`} />
            <div className={styles.areaText}>
                <Title>
                    <h2>{titulo}</h2>
                </Title>

                {isFavorited(id)
                    ? <IoHeartSharp
                        className={styles.heart}
                        onClick={handleFavoriteClick}
                    />
                    : <IoHeartOutline
                        className={styles.heart}
                        onClick={handleFavoriteClick}
                    />
                }
            </div>
        </div>
    )
}
export default Card;
