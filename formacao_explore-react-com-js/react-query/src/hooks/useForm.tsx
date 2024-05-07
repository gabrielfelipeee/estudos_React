import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useFoodAdd } from "./useFoodMutate";

const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("Erro");
    }
    const {
        name,
        setName,
        price,
        setPrice,
        image,
        setImage,
        id
    } = context;
    const { mutate, isSuccess } = useFoodAdd();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { id, name, image, price }
        mutate(data);

        if (isSuccess) {
            setName("");
            setPrice("");
            setImage("");
        }
    };

    const changePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }

    return {
        name,
        setName,
        price,
        changePrice,
        setPrice,
        image,
        setImage,
        submit,
        isSuccess
    }
}
export default useForm;