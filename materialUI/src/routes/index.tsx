import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/inicial' element={<Button variant="contained" color="primary" >Hello world</Button>} />
            <Route path='*' element={<Navigate to='/inicial' />} />
        </Routes>
    )
};
export default AppRoutes;
