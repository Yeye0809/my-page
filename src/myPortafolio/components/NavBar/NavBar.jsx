
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Grid, Link, Typography } from "@mui/material"
//import {  MenuOutlined } from "@mui/icons-material"



export const NavBar = () => {

  return (

    <AppBar  position="static" >
        <Toolbar >
            

            <Grid container direction="row" justifyContent="space-around" alignItems="center" >

                <Link component={RouterLink } color="inherit" underline='hover' to="/">
                   <Typography variant='h4'>Home</Typography> 
                </Link>

                <Link component={RouterLink } color="inherit"  underline='hover' to="/skills">
                  <Typography variant='h4'>Skills</Typography>
                </Link>

                <Link component={RouterLink } color="inherit"  underline='hover' to="/proyects">
                  <Typography variant='h4'>Projects</Typography>
                </Link>
                

            </Grid>
 
        </Toolbar>
    </AppBar>


  )
}
