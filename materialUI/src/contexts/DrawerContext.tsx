import { createContext, ReactNode, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean,
    toggleDrawer: () => void
};
const DrawerContext = createContext({} as IDrawerContextData);


interface IDrawerContextProps {
    children: ReactNode
}
export const DrawerProvider = ({ children }: IDrawerContextProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = useCallback(() => {
        setIsDrawerOpen(oldValuue => !oldValuue);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    )
};

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};
