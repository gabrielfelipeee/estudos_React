import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useFoodAdd } from "./useFoodMutate";

const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("Erro");
    }
    const {
        foodData,
        setFoodData,
        id
    } = context;
    const { mutate, isSuccess } = useFoodAdd();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(foodData, {
            onSuccess: () => { // Essa callback eerá executada quando a jutação for bem-sucedida
                setFoodData({
                    id: id,
                    name: "",
                    price: "",
                    image: "",
                });
            }
        });
    };

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFoodData(prev => ({ ...prev, name: event.target.value }))
    }
    const changePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFoodData(prev => ({ ...prev, price: event.target.value }))
    }
    const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFoodData(prev => ({ ...prev, image: event.target.value }))
    }

    return {
        foodData,
        changeName,
        changePrice,
        changeImage,
        submit,
        isSuccess
    }
}
export default useForm;