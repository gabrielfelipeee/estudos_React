import styles from './Home.module.css';

import db from '../../mocks/db.json';
import bannerHome from '../../assets/banner-home.png';


import Banner from '../../components/Banner';
import Title from '../../components/Title';
import ContainerVideos from '../../components/ContainerVideos';
import Card from '../../components/Card';


const Home = () => {
    return (
        <main>
            <Banner image={bannerHome} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>

            <ContainerVideos>
                {db.map(video =>
                    <Card {...video} key={video.id}/>
                )}
            </ContainerVideos>
        </main>
    )
};
export default Home;
