import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../contexts";

const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path='/inicial' element={
                <Button  variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
            } />
            <Route path='*' element={<Navigate to='/inicial' />} />
        </Routes>
    )
};
export default AppRoutes;
