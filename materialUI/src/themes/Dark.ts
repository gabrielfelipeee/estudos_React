import { createTheme } from '@mui/material';
import { yellow, cyan } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: yellow[700],
            dark: yellow[800], // tbm usado no hover, por padrão
            light: yellow[500],
            contrastText: "#fff"
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: "#fff"
        },
        background: {
            default: "#202124",
            paper: "#303134",
        }
    },
    typography: {
        allVariants: {
            color: "#fff"
        }
    }
});
