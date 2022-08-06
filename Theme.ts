import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        mode: 'light',
        background: {default: 'white'}
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
    }
  });

//   : {
//     MuiPaper: {
//         defaultProps: {
//             sx: {
//                 padding: '10px',
//                 marginTop: '20px'
//             }
//         }
//     }
// }