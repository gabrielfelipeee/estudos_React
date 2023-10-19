import './styles.css'

const ListDropDown = (props) => {
    return (
        <div className="container-list-drop-down">
            <label>{props.label}</label>
            <select required={props.obligatory}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};
export default ListDropDown;
