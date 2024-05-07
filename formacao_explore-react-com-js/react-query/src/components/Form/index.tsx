import './styles.scss';
import { IoMdClose } from "react-icons/io";
import TextField from '../TextField';
import { useEffect} from 'react';
import useForm from '../../hooks/useForm';

interface IFormProps {
    controlModal: () => void
}

const Form = ({ controlModal }: IFormProps) => {
    const {
        name,
        setName,
        price,
        changePrice,
        image,
        setImage,
        submit,
        isSuccess
    } = useForm();

    useEffect(() => {
        controlModal();
    }, [isSuccess])

    return (
        <div className="box-form">
            <h2>Cadastre um novo produto no Cardápio</h2>
            <IoMdClose
                className="icon-close"
                onClick={controlModal}
            />
            <form onSubmit={submit}>
                <TextField
                    key="name"
                    labelInput="Nome"
                    placeholder="Insira o nome do produto"
                    valueInput={name}
                    eventInput={event => setName(event.target.value)}
                />
                <TextField
                    key="price"
                    labelInput="Preço"
                    placeholder="Insira o preço do produto"
                    valueInput={price}
                    eventInput={changePrice}
                />
                <TextField
                    key="image"
                    labelInput="Imagem"
                    placeholder="Insira a URL da imagem do produto"
                    valueInput={image}
                    eventInput={event => setImage(event.target.value)}
                />
                <input
                    className="btn-save"
                    type="submit"
                    value="Salvar"
                />
            </form>
        </div>
    )
}
export default Form;
