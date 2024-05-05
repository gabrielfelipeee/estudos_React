import './styles.scss';
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IFoodData } from '../../interfaces/IFoodData';
import { useFoodDelete } from '../../hooks/useFoodMutate';


const Card = ({ id, image, name, price }: IFoodData) => {
    const { mutate } = useFoodDelete();

    const deleteFood = () => {
        confirm(`Você realmente deseja excluir ${name} do cardápio?`) &&
            mutate(id);
    };

    return (
        <div className="box-card">
            <CiEdit
                className="icon icon-edit"
            />
            <IoMdClose
                className="icon icon-close"
                onClick={deleteFood}
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
