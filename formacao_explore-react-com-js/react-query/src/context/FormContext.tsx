import { ReactNode, createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IFormContext {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    price: string,
    setPrice: React.Dispatch<React.SetStateAction<string>>,
    image: string,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    id: string
}

interface IcardProviderProps {
    children: ReactNode
}



const FormContext = createContext<IFormContext | null>(null);
FormContext.displayName = "Form";

const FormProvider = ({ children }: IcardProviderProps) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const id = uuidv4();

    return (
        <FormContext.Provider value={{
            name,
            setName,
            price,
            setPrice,
            image,
            setImage,
            id
        }}
        >
            {children}
        </FormContext.Provider>
    )
}
export { FormContext, FormProvider };