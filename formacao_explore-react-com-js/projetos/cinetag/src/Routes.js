import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import FavoritesProvider from "./context/FavoritesContext";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />

            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favoritos" element={<Favorites />} />
                </Routes>
            </FavoritesProvider>
            
            <Footer />
        </BrowserRouter>
    )
}
export default AppRoutes;
