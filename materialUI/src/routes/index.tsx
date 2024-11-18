import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../contexts";
import { useEffect } from "react";

const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    const { setDrawerOptions, drawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                label: "Inicio",
                path: "/inicio"
            }
        ]);
    }, []);
    return (
        <Routes>
            <Route path='/inicio' element={
                <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
            } />

        </Routes>
    )
};
export default AppRoutes
