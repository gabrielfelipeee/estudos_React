import './styles.scss';
import { IFoodData } from '../../interfaces/IFoodData';

const Card = ({ image, name, price }: IFoodData) => {
    return (
        <div className="box-card">
            <img src={image} />
            <div className="box-text">
                <h2>{name}</h2>
                <p><span>Valor:</span> {price}</p>
            </div>
        </div>
    )
}
export default Card;
