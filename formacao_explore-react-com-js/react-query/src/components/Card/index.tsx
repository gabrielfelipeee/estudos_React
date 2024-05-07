import './styles.scss';
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IFoodData } from '../../interfaces/IFoodData';
import useCard from '../../hooks/useCard';

const Card = ({ id, name, price, image }: IFoodData) => {
    const { deleteFood } = useCard();

    return (
        <div className="box-card">
            <CiEdit
                className="icon icon-edit"

            />
            <IoMdClose
                className="icon icon-close"
                onClick={() => deleteFood(name, id)}
            />
            <img src={image} />
            <div className="box-text">
                <h2>{name}</h2>
                <p><span>Valor:</span> {price}</p>
            </div>
        </div>
    )
}
export default Card;
