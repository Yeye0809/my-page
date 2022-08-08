import {  Grid, Typography } from "@mui/material"
import { imageUrl } from "./imageUrl"



const {html, css, mui, bootstrap, js, react, github} = imageUrl;


export const ProgrammingSkills = () => {
  return (
    <Grid 
          container
          alignItems='center'
          justifyContent='center'
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx= {{ mt: 2}}>
              
              <Grid item textAlign='center' >  
                  <Typography variant="h6" color="primary"> HTMl </Typography> 
                  <img src={html} alt="html" className='img-skills'/>             

              </Grid>

              <Grid item textAlign='center'>
                  <Typography variant="h6" color="primary"> CSS </Typography>
                  <img src={css} alt="html" className='img-skills'/>
                 

              </Grid>

              <Grid item textAlign='center'>
                 <Typography variant="h6" color="primary"> MUI </Typography>
                 <img src={mui} alt="html" className='img-skills'/>

              </Grid>

              <Grid item textAlign='center'> 
                <Typography variant="h6" color="primary"> BOOTSTRAP </Typography>
                <img src={bootstrap} alt="html" className='img-skills'/>

              </Grid>

              <Grid item textAlign='center'>  
                 <Typography variant="h6" color="primary"> JAVASCRITP </Typography>
                 <img src={js} alt="html" className='img-skills'/>

              </Grid>

              <Grid item textAlign='center'>
                <Typography variant="h6" color="primary"> REACT JS </Typography>
                <img src={react} alt="html" className='img-skills'/>

              </Grid>

              <Grid item textAlign='center'>
                 <Typography variant="h6" color="primary"> GITHUB </Typography>
                 <img src={github} alt="html" className='img-skills'/>

              </Grid>


        </Grid>
  )
}
