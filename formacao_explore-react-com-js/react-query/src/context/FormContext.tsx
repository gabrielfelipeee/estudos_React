import { ReactNode, SetStateAction, createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IFormContext {
    foodData: IFoodData,
    setFoodData: React.Dispatch<SetStateAction<IFoodData>>,
    id: string
}

interface IcardProviderProps {
    children: ReactNode
}

interface IFoodData {
    id: string,
    name: string,
    price: string,
    image: string
}

const FormContext = createContext<IFormContext | null>(null);
FormContext.displayName = "Form";

const FormProvider = ({ children }: IcardProviderProps) => {
    const id = uuidv4();
    const [foodData, setFoodData] = useState<IFoodData>({
        id: id,
        name: "",
        price: "",
        image: "",
    });

    return (
        <FormContext.Provider value={{
            foodData,
            setFoodData,
            id
        }}
        >
            {children}
        </FormContext.Provider>
    )
}
export { FormContext, FormProvider };