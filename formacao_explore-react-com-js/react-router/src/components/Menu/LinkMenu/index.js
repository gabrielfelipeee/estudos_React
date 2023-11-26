import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const LinkMenu = (props) => {
    const location = useLocation();
    return (
        <Link
            className={`link-menu ${location.pathname === props.link ? "current-page" : ""}`}
            to={props.link}>
            {props.page}
        </Link>
    )
};
export default LinkMenu;
