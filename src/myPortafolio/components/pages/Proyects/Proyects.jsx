import { useNavigate } from "react-router-dom";
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Main } from './';


export const Proyects = () => {

    const navigate = useNavigate();

    const navigateSkills = () => {
      navigate('/skills')
    }

  return (
    <div>
        <Main />
        <Button 
          onClick={ navigateSkills }
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
    </div>
  )
}
