import './styles.css'

const ListDropDown = (props) => {

    const whenSelecting = event => {
        props.whenChanging(event.target.value)
    };

    return (
        <div className="container-list-drop-down">
            <label>{props.label}</label>
            <select onChange={whenSelecting} value={props.value} required={props.obligatory}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};
export default ListDropDown;
