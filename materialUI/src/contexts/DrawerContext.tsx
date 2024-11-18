import { createContext, ReactNode, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean,
    drawerOptions: IDrawerOptions[],
    toggleDrawer: () => void,
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
};
const DrawerContext = createContext({} as IDrawerContextData);


interface IDrawerOptions {
    icon: string,
    label: string,
    path: string
}
interface IDrawerContextProps {
    children: ReactNode
}
export const DrawerProvider = ({ children }: IDrawerContextProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

    const toggleDrawer = useCallback(() => {
        setIsDrawerOpen(oldValuue => !oldValuue);
    }, []);
    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{
            isDrawerOpen,
            drawerOptions,
            toggleDrawer,
            setDrawerOptions: handleSetDrawerOptions
        }}>
            {children}
        </DrawerContext.Provider>
    )
};

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};
