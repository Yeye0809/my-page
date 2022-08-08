import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpletheme = createTheme({
    palette: {
        primary:{
            main: '#297EA6'
        },
        secondary:{
            main: '#024b7f'
        },
        error: {
            main: red.A400
        }
    }

})