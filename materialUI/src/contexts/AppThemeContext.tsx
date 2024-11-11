import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react"
import { ThemeProvider } from '@emotion/react';
import { Box } from "@mui/system";

import { DarkTheme, LightTheme } from '../themes';

interface IAppThemeContextData {
    themeName: "light" | "dark",
    toggleTheme: () => void
};
const AppThemeContext = createContext({} as IAppThemeContextData);


interface IAppThemeProviderProps {
    children: ReactNode
}
export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light");
    }, []);

    const theme = useMemo(() => {
        if (themeName === "light") return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <AppThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
};

export const useAppThemeContext = () => {
    return useContext(AppThemeContext);
};
