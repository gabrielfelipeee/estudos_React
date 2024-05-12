import './styles.scss';
import { UseFormRegister } from 'react-hook-form';

interface IListDropDownProps {
    label: string,
    register: UseFormRegister<any>,
    options: string[],
    name: string,
    validation?: {
        validate: (value: string) => boolean
    }
    error: boolean,
    messageError?: string
}

const ListDropDown = ({
    register,
    name,
    validation,
    label,
    options,
    error,
    messageError
}: IListDropDownProps) => {

    return (
        <div className="box-list-drop-down">
            <label>{label}</label>
            <select
                className={error === true ? "input-error" : ""}
                {...register(name, validation)}
            >
                <option value="0">Selecione sua profissão</option>
                {options.map((option, index) =>
                    <option key={index} value={option}>
                        {option}
                    </option>
                )}
            </select>
            {error && <p className="input-error-message">{messageError}</p>}
        </div>
    );
};

export default ListDropDown;
