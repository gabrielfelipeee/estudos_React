import styles from './ContainerVideos.module.css';


const ContainerVideos = ({ children }) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
export default ContainerVideos;
