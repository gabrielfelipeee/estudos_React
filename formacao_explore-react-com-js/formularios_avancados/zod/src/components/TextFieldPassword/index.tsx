import './styles.scss'
import { useState } from "react";
import { ITextField } from '../../interfaces/ITextField';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const TextFieldPassword = ({
    placeholder,
    label,
    registerName,
    messageError,
    error,
    register,
    validation
}: ITextField) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleVisible = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="box-text-field-password">
            <div className="box-input">
                <label>{label}</label>
                <input
                    className={error ? "input-error" : ""}
                    {...register(registerName, validation)}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                />
                <div onClick={toggleVisible} className="box-icon">
                    {
                        showPassword
                            ? <EyeSlashIcon className="icon" />
                            : <EyeIcon className="icon" />
                    }
                </div>
            </div>
            <p className="input-error-message">{messageError}</p>
        </div>
    )
};
export default TextFieldPassword;