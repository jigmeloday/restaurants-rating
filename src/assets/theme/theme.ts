import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main : '#0079A2',
            light : '#E6F2F6',
            dark : '#005673'
        },
        success: {
            main: '#76D03F'
        },
        error: {
            main: '#E74C3C'
        },
        warning: {
            main: '#F39C12',
            contrastText: '#FFFFFF'
        },
        black: {
            main: '#1F1F1F',
            light: '#ABABAB',
            dark: '#3D3D3C',
            contrastText: '#626262',
        },
        altoGray: {
            light: '#F2F2F2',
            main: '#F5F5F5',
            dark: '#F8F9FA',
            contrastText: '#979A9D',
        },
        white: {
            main: '#FAF9F9',
            light: '#FAF9F9',
            contrastText: '#CACACA'
        },
    },
    typography: {

        body1: {
            fontSize: '16px',
        },

        body2: {
            fontSize: '14px',
        },
        subtitle2: {
            fontSize: '12px',
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: '400'
                },
            },
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        altoGray: Palette['primary'];
    }

    interface PaletteOptions {
        altoGray?: PaletteOptions['primary'];
    }
    interface Palette {
        black: Palette['primary'];
    }

    interface PaletteOptions {
        black?: PaletteOptions['primary'];
    }

    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}
