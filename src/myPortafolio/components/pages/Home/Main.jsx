import { Avatar, Grid,  Typography } from "@mui/material"


const photoUrl = './assets/photo-profile.jpg'

export const Main = () => {
  return (

        
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ p:3, mt: 5}}
                 
            >
              
              <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: '50%'}}
                
                
               >
                          
                      
                      <Grid item >

                         <Avatar variant={"rounded"} alt="The image" src={photoUrl} style={{ width: 150, height: 150, borderRadius: '50%' }} />
                      </Grid>
                      
                      <Grid container alignItems="center" justifyContent="center" direction="column" sx={{mt:3}}>

                            <Typography variant="h4">Hi!</Typography>
                            <Typography variant="h3" color="primary"> I'm Yeferson Hernandez</Typography>
                            <Typography variant="h4">Frontend Developer</Typography>


                      </Grid>

              </Grid>
                     
               
        </Grid>
        

  
  )
}
