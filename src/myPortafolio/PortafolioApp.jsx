

import { AppRouter } from './Router/AppRouter';

import { NavBar } from './components/NavBar';
import { AppTheme } from './theme';
import { Box, Divider, Grid } from '@mui/material';


export const PortafolioApp = () => {
  return (
     <AppTheme>
        <Grid container className="container">
            <NavBar />
            <Box component="main"
                sx={{ width: '100%', p: 3 }}
            >
               <Divider />
               <AppRouter />
           
             </Box>
        </Grid >
       
     </AppTheme>
  )
}
