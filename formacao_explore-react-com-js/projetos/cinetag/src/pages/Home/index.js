import { useEffect, useState } from 'react';
import bannerHome from '../../assets/banner-home.png';


import Banner from '../../components/Banner';
import Title from '../../components/Title';
import ContainerVideos from '../../components/ContainerVideos';
import Card from '../../components/Card';



const Home = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/gabrielfelipeee/cinetag-api/videos')
            .then(respone => respone.json())
            .then(data => setVideos(data))
    }, []);


    return (
        <main>
            <Banner image={bannerHome} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>

            <ContainerVideos>
                {videos.map(video =>
                    <Card {...video} key={video.id} />
                )}
            </ContainerVideos>
        </main>
    )
};
export default Home;
