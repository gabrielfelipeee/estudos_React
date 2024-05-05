import './styles.scss';
import { IoMdClose } from "react-icons/io";
import TextField from '../TextField';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import useFoodMutate from '../../hooks/useFoodMutate';

interface IFormProps {
    control: () => void
}


const Form = ({ control }: IFormProps) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const { mutate, isSuccess,  } = useFoodMutate();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { name, image, price }
        mutate(data);

        setName("");
        setPrice("");
        setImage("");
    };

    useEffect(() => {
        control();

    }, [isSuccess])


    return (
        <div className="box-form">
            <h2>Cadastre um novo produto no Cardápio</h2>
            <IoMdClose
                className="icon-close"
                onClick={control}
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
                    eventInput={event => setPrice(event.target.value)}
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
