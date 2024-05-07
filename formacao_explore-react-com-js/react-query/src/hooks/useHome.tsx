import { useContext, useEffect } from "react";
import { HomeContext } from "../context/HomeContext";

const useHome = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error("Erro");
    }
    const {
        controllerModal,
        setControllerModal
    } = context;

    const openModal = () => {
        setControllerModal("");
    }
    const closeModal = () => {
        setControllerModal("hide");
    }


    useEffect(() => {
        const body = document.body;
        controllerModal === "" ? body.classList.add("body-hidden") : "";

        return () => {
            body.classList.remove("body-hidden");
        }
    }, [controllerModal]);


    return {
        closeModal,
        openModal,
        controllerModal
    }
}
export default useHome;