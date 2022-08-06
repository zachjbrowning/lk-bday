import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '10px',
                    marginTop: '20px'
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
