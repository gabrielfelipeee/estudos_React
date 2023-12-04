import { Outlet } from "react-router-dom";
import Banner from "../Banner"

const DefaultPage = () => {
    return (
        <main>
            <Banner />

            <Outlet/>
        </main>
    )
}
export default DefaultPage;
