import './styles.scss';
import { ITextField } from '../../interfaces/ITextField';

const TextField = ({
    placeholder,
    label,
    register,
    validation,
    registerName,
    error,
    messageError,
    type = "text"
}: ITextField) => {
    return (
        <div className="box-text-field">
            <label>{label}</label>
            <input
                className={error ? "input-error" : ""}
                {...register(registerName, validation)}
                type={type}
                placeholder={placeholder}
            />
            {error && <p className="input-error-message">{messageError}</p>}
        </div>
    )
};
export default TextField;
