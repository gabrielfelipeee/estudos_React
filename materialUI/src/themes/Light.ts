import { createTheme } from '@mui/material';
import { yellow, cyan } from '@mui/material/colors';


// CreateTem
export const LightTheme = createTheme({
    // Definições da paleta de cores
    palette: {
        primary: {
            main: yellow[700], // Cor principal, usado em botões, links, etc.
            dark: yellow[800], // Versão mais escura da cor principal
            light: yellow[500], // Versão mais clara da cor principal
            contrastText: "#fff" // Texto em branco para contraste
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: "#fff"
        },
        background: {
            default: "#f7f6f3", // Cor de fundo padrão
            paper: "#fff", // Cor de fndo para elementos tipo "paper", (como Cards)
        }
    }
});
