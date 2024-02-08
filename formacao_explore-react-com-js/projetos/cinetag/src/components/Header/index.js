import { Link } from "react-router-dom";
import styles from './Header.module.css';

import logo from '../../assets/logo.png';


import HeaderLink from "./HeaderLink";


const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo do Cinetag" />
            </Link>
            <nav>
                <HeaderLink url="/">Home</HeaderLink>
                <HeaderLink url="/favoritos">Favoritos</HeaderLink>
            </nav>
        </header>
    )
}
export default Header;
