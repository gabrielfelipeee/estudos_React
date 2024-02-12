import styles from './Favorites.module.css';



import bannerFavorites from '../../assets/banner-favoritos.png';

import Banner from '../../components/Banner';
import Title from '../../components/Title';
import ContainerVideos from '../../components/ContainerVideos';
import Card from '../../components/Card';


import useFavoritesContext from '../../hooks/useFavoritesContext';



const Favorites = () => {
    const { favorites } = useFavoritesContext();
    console.log(favorites)
    return (
        <main>
            <Banner image={bannerFavorites} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>

            <ContainerVideos>
                {favorites.map(video =>
                    <Card {...video} key={video.id} />
                )}
            </ContainerVideos>
        </main>
    )
};
export default Favorites;
