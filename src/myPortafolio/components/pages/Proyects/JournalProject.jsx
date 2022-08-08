import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import {  Grid, IconButton } from "@mui/material"
import { useCounter } from "../../../Hooks/useCounter"



const carrowsel = ['Login','register','main','NoteView']

export const JournalProject = () => {

    const {next, back, count} = useCounter();

  return (
    <Grid container justifyContent='center' >
        <Grid item component='div' sx={{position: 'relative', maxHeight: 185, maxWidth: 255}}>

            <IconButton 
                disabled={ ( count === 0 ) ? 'true' : null}
                onClick={ back }
                size="small"
                sx={{
                    color: "white",
                    ':hover' : {  opacity: 0.9 },
                    position: "absolute",
                    left:0,
                    bottom: 70
                }}
            >
                 <ArrowBackIosOutlined sx={{ fontSize: 30  }}/>

            </IconButton>


 
            <IconButton 
                disabled={ ( count === (carrowsel.length - 1)) ? 'true' : null}
                onClick={ next }
                size="small"
                sx={{
                    color: "white",
                    ':hover' : {  opacity: 0.9 },
                    position: "absolute",
                    right: 0,
                    bottom: 70
                }}
            >
                 <ArrowForwardIosOutlined sx={{ fontSize: 30  }}/>


            </IconButton>

            <img src={`./assets/JournalApp/${carrowsel[count]}.PNG`} alt={`${carrowsel[count]}`} className='img-projects' />

        </Grid>
           
    </Grid>
  )
}
 