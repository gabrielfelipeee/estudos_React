import './styles.scss';

interface ITextFieldProps {
    labelInput: string,
    typeInput?: string,
    placeholder: string,
    eventInput: React.ChangeEventHandler<HTMLInputElement>,
    valueInput: any
}


const TextField = ({
    labelInput,
    placeholder,
    eventInput,
    valueInput,
    typeInput = "text"
}: ITextFieldProps) => {
    return (
        <div className="box-text-field">
            <label>{labelInput}</label>
            <input
                type={typeInput}
                placeholder={placeholder}
                onChange={eventInput}
                value={valueInput}
            />
        </div>
    )
}
export default TextField;
