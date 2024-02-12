import { Outlet } from 'react-router-dom';

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import FavoritesProvider from '../../context/FavoritesContext';

const ParentRoute = () => {
    return (
        <>
            <Header />
            <FavoritesProvider>
                <Outlet />
            </FavoritesProvider>
            <Footer />
        </>
    )
}
export default ParentRoute;

