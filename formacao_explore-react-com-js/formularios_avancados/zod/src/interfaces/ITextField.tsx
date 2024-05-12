import { UseFormRegister } from "react-hook-form";

export interface ITextField {
    type?: string,
    label: string,
    placeholder: string,

    registerName: string,
    messageError?: string,
    error: boolean,
    register: UseFormRegister<any>
    validation?: {
        setValueAs?: (value: string) => number
    }
};
