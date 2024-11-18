import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


interface IListItemLink {
    label: string,
    icon: string,
    to: string,
    onClick?: () => void,
};


const ListItemLink = ({ icon, label, onClick, to }: IListItemLink) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = () => {
        navigate(to);
        onClick?.(); // ?. -> se for undefined ou null, não irá executar
    };

    return (
        <ListItemButton
            onClick={handleClick}
            selected={pathname === to && true}
        >
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}
export default ListItemLink;
