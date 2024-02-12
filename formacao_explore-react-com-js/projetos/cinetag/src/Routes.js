import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ParentRoute from "./pages/ParentRoute";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Player from "./pages/Player";
import NotFounder from "./pages/NotFounder";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ParentRoute />}>
                    <Route index element={<Home />} />
                    <Route path="/favoritos" element={<Favorites />} />
                    <Route path="/:id" element={<Player />} />
                    <Route path="*" element={<NotFounder />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;
