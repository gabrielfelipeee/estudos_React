import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ITextField {
    type?: string,
    label: string,
    placeholder: string,

    name: string,
    register: UseFormRegister<any>,
    validation?: {
        validate?: (value: string) => boolean,
        required?: boolean,
        minLength?: number
    },
    errors?: FieldErrors
}
