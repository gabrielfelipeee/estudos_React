import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";


interface IListItemLink {
    label: string,
    icon: string,
    to: string,
    onClick?: () => void
};


const ListItemLink = ({ icon, label, onClick, to }: IListItemLink) => {
    const { pathname } = useLocation();

    return (
        <ListItemButton
            component={Link} // O component ListItemButton irá se comportar como um Link
            to={to} // propriedade obrigatória do Link
            onClick={onClick || undefined}
            selected={pathname === to}
        >
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}
export default ListItemLink;
