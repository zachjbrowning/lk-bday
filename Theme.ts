import { createTheme } from "@mui/material";
import { purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: purple[500],
        },
        secondary: {
          // This is green.A700 as hex.
          main: '#11cb5f',
        },
        mode: "light",
      },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '10px',
                    marginTop: '20px'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    padding: 0,
                    margin: 0
                }
            }
        }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
  });
