import { ReactNode, createContext, useState } from "react";

interface IHomeContext {
    controllerModal: string,
    setControllerModal: React.Dispatch<React.SetStateAction<string>>
}

interface IcardProviderProps {
    children: ReactNode
}



const HomeContext = createContext<IHomeContext | null>(null);
HomeContext.displayName = "Home";

const HomeProvider = ({ children }: IcardProviderProps) => {
    const [controllerModal, setControllerModal] = useState<string>("hide");

    return (
        <HomeContext.Provider value={{
            controllerModal,
            setControllerModal
        }}
        >
            {children}
        </HomeContext.Provider>
    )
}
export { HomeContext, HomeProvider };