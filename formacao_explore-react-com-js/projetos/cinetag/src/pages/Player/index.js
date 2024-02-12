import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';

import bannerPlayer from '../../assets/banner-player.png';

import Banner from '../../components/Banner';
import Title from '../../components/Title';
import NotFounder from '../NotFounder';




const Player = () => {
    const params = useParams();
    const [video, setVideo] = useState();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/gabrielfelipeee/cinetag-api/videos?id=${params.id}`)
            .then(response => response.json())
            .then(data => setVideo(...data))
    }, []);

    if (!video) { return <NotFounder /> }
    

    return (
        <main>
            <Banner image={bannerPlayer} />
            <Title>
                <h1>Player</h1>
            </Title>

            <section className={styles.containerVideo}>
                <iframe
                    width="560"
                    height="315"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </section>
        </main>
    )
};
export default Player;
