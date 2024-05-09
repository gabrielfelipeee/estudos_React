import './styles.scss'
import { useState } from "react";
import { ITextField } from '../../interfaces/ITextField';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const TextFieldPassword = ({
    placeholder,
    label,
    register,
    name,
    validation,
    errors
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
                    className={errors?.[name] && "input-error"}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
                <div onClick={toggleVisible} className="box-icon">
                    {
                        showPassword
                            ? <EyeSlashIcon className="icon" />
                            : <EyeIcon className="icon" />
                    }
                </div>
            </div>
            {errors?.[name]?.type === 'required' && <p className="input-message">Esse campo é obrigatório</p>}
            {errors?.[name]?.type === 'minLength' && <p className="input-message">A senha precisa ter pelo menos 8 caracteres</p>}
            {errors?.[name]?.type === 'validate' && <p className="input-message">A senha precisa ser igual</p>}
        </div>
    )
};
export default TextFieldPassword;
