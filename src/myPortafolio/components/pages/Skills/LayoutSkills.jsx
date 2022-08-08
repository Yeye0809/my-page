
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { Grid, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ProgrammingSkills } from './ProgrammingSkills'

export const LayoutSkills = () => {
  const navigate = useNavigate();

  const navigateProyects = () => {
    navigate('/proyects')
  }

  const navigateHome = () => {
    navigate('/')
  }

  return (

     <Grid container>

        <Grid 
          container
          alignItems='center'
          justifyContent='center'
          direction= 'column'
          rowSpacing={2}
          sx= {{ mt: 2}}>
              
              <Grid 
                container
                alignItems='center'
                justifyContent='space-between'
                direction='column'
                rowSpacing={2}
                sx={{width: '50%', mt: 2}}>
                  
                  <Typography component='div'> 
                     Here we can find the skills that I handle, which are some types of languages and frameworks; I am good at researching, that has led me to find books, videos and forums with the information I am looking for; I also have the patience to continue investigating until I reach what I want to acquire; Thanks to all this I have managed to obtain knowledge about    <strong>API, REACT-ROUTER-DOM, REDUX-TOOLKIT... </strong>   
                  </Typography>

                  <ProgrammingSkills />
            </Grid>

        </Grid>
        <Button 
          onClick={ navigateHome }
          size="large"
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            ':hover' : {  backgroundColor: "secondary.main", opacity: 0.9 },
            position: "fixed",
            bottom: 50
          }}
        >
          <ArrowBackIosOutlined sx={{ fontSize: 30  }}/>
        </Button>

        <Button 
          onClick={ navigateProyects }
          size="large"
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            ':hover' : {  backgroundColor: "secondary.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50
          }}
        >
          <ArrowForwardIosOutlined sx={{ fontSize: 30  }}/>
        </Button>
     </Grid>

  )
}
