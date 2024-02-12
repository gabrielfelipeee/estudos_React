import { useContext } from "react";


import { FavoritesContext } from "../context/FavoritesContext";

const useFavoritesContext = () => {
    const {
        favorites,
        setFavorites
    } = useContext(FavoritesContext);


    const isFavorited = id => favorites.some(favorite => favorite.id === id);

    const addFavorite = (newFavorite) => {
        const isFavorite = favorites.some(video => video.id === newFavorite.id);

        if (!isFavorite) {
            return setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
        }
        return setFavorites(prevFavorites => prevFavorites.filter(video => video.id !== newFavorite.id));
    };



    return {
        favorites,
        addFavorite,
        isFavorited
    }
}
export default useFavoritesContext
