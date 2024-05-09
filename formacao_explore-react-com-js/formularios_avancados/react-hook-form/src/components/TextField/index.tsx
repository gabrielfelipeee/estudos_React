import './styles.scss';
import { ITextField } from '../../interfaces/ITextField';

const TextField = ({
    placeholder,
    label,
    register,
    name,
    validation,
    errors,
    type = "text"
}: ITextField) => {
    return (
        <div className="box-text-field">
            <label>{label}</label>
            <input
                className={errors?.[name] && "input-error"}

                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
            />
            {errors?.[name]?.type === 'required' && <p className="input-message">Esse campo é obrigatório</p>}
            {errors?.[name]?.type === 'validate' && <p className="input-message">Insira um email válido</p>}
        </div>
    )
};
export default TextField;
