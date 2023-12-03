import './styles.scss';
import { ReactComponent as Trademark } from '../../assets/trademark.svg';

const Footer = () => {
    return (
        <footer className="box-footer">
            <Trademark />
            <p>Desenvolvido por <a href="https://github.com/gabrielfelipeee" target="_blank">
                Gabriel Felipe
            </a>
            </p>
        </footer>
    )
};
export default Footer;
