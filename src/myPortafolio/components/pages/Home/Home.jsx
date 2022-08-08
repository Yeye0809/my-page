import { Divider, Grid, Button } from '@mui/material';
import { ArrowForwardIosOutlined } from '@mui/icons-material';

import { Main, SocialsNet } from './';
import { useNavigate } from 'react-router-dom';





export const Home = () => {

  const navigate = useNavigate();

  const navigateSkills = () => {
    navigate('/skills')
  }

  return (
    <Grid container>
        <Main />
        <Divider />
        <SocialsNet />

        <Button 
          onClick={ navigateSkills }
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
