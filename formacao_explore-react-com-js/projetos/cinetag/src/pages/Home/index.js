import styles from './Home.module.css';

import db from '../../mocks/db.json';
import bannerHome from '../../assets/banner-home.png';

import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Title from '../../components/Title';

import Card from '../../components/Card';

const Home = () => {
    return (
        <>
            <Header />
            <Banner image={bannerHome} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>

            <ul className={styles.list}>
                {db.map(video =>
                    <li key={video.id}>
                        <Card {...video} />
                    </li>)}
            </ul>

            <Footer />
        </>
    )
};
export default Home;
