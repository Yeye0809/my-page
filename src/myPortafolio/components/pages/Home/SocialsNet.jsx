import { Instagram, Facebook, LinkedIn } from '@mui/icons-material'
import { Grid, Button, Divider } from '@mui/material'


export const SocialsNet = () => {
  return (
    <Grid 
      container
      justifyContent="center"
      alignItems="center">

        <Grid item sx={{ mt: 5 }}>
            <Divider />
            
            <Button href='https://www.instagram.com/?hl=es-la'>    
                    <Instagram />  
            </Button>
            <Button href='https://www.facebook.com/sergio.acevedogarcia.3/'>    
                    <Facebook />  
            </Button>
            <Button href='https://www.linkedin.com/in/yeferson-hernandez-53aa53212/'>    
                    <LinkedIn />  
            </Button>
        </Grid>
        
    </Grid> 
  )
}
 