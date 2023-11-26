import './styles.scss';

import LinkMenu from './LinkMenu';


const Menu = () => {
    return (
        <header>
            <nav className='box-menu'>
                <ul>
                    <li><LinkMenu page="Home" link="/" /></li>
                    <li><LinkMenu page="About Me" link="/aboutme" /></li>
                </ul>
            </nav>
        </header>
    )
};
export default Menu;
