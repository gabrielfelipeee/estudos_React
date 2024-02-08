import styles from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Desenvolvido por
                <a href="https://github.com/gabrielfelipeee" target='_blank'> Gabriel Felipe
                </a> | Design por Alura
            </p>
        </footer>
    )
}
export default Footer;
