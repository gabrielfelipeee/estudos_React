import styles from './Card.module.css';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";



import Title from '../Title';


const Card = ({ id, titulo, capa, link }) => {
    return (
        <div className={styles.card}>
            <img src={capa} alt={`Capa do vídeo: ${titulo}`} />
            <div className={styles.areaText}>
                <Title>
                    <h2>{titulo}</h2>
                </Title>
                <IoHeartOutline size={24} className={styles.heart}/>
            </div>
        </div>
    )
}
export default Card;
