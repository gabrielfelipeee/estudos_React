import './styles.scss';
import { UseFormRegister } from 'react-hook-form';

interface IListDropDownProps {
    register: UseFormRegister<any>,
    name: string,
    validation?: {
        validate: (value: string) => boolean
    };
}

const ListDropDown = ({ register, name, validation }: IListDropDownProps) => {
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
                {...register(name, validation)}
            >
                <option value="0">Selecione sua profissão</option>
                {professions.map((profession, index) =>
                    <option key={index} value={profession}>
                        {profession}
                    </option>
                )}
            </select>
        </div>
    );
};

export default ListDropDown;
