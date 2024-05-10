import './styles.scss';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface IListDropDownProps {
    register: UseFormRegister<any>,
    name: string,
    validation?: {
        validate: (value: string) => boolean
    }
    errors?: FieldErrors
}

const ListDropDown = ({ register, name, validation, errors }: IListDropDownProps) => {
    const professions = [
        "Desenvolvedor Front-End",
        "Desenvolvedor Back-End",
        "Desenvolvedor Full-Stack",
        "Design",
        "DBA (Database Administrator)"
    ];

    return (
        <div className="box-list-drop-down">
            <label>Profissão</label>
            <select
                className={errors?.[name] && "input-error"}
                {...register(name, validation)}
            >
                <option value="0">Selecione sua profissão</option>
                {professions.map((profession, index) =>
                    <option key={index} value={profession}>
                        {profession}
                    </option>
                )}
            </select>
            {errors?.[name]?.type === 'validate' && <p className="input-message">Selecione uma profissão</p>}
        </div>
    );
};

export default ListDropDown;
