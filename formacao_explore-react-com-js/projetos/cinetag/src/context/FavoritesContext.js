import { createContext, useState } from "react";


const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";


const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);


    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesProvider;
export { FavoritesContext }
