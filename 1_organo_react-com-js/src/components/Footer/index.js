import './styles.css';


const Footer = () => {
    return (
        <footer className="container-footer">
                <ul className="social-media">
                    <li>
                        <a href="#" target="_blank"><img src="/images/fb.png"></img></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><img src="/images/tw.png"></img></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><img src="/images/ig.png"></img></a>
                    </li>
                </ul>
                <img src="/images/logo.png"></img>
                <p className="developer">Desenvolvido por <a href="https://github.com/gabrielfelipeee" target="_blank">Gabriel Felipe</a></p>
        </footer>
    )
}
export default Footer;
