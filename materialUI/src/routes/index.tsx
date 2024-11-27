import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDrawerContext } from "../contexts";

import { Dashboard } from "../pages/Dashboard"; "../pages/";

const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                label: "Inicio",
                path: "/inicio"
            },
            {
                icon: "peoples",
                label: "Pessoas",
                path: "/pessoas"
            }
        ]);
    }, []);
    return (
        <Routes>
            <Route path='/inicio' element={<Dashboard />} />
            <Route path='/pessoas' element={<Dashboard />} />
            <Route path='/*' element={<Dashboard />} />
        </Routes>
    )
};
export default AppRoutes
