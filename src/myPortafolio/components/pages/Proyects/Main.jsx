import { Box, Grid, Link, Typography } from "@mui/material"


import { JournalProject } from './';
import { HerosProject } from "./HerosProject";
import { GifExpertProject } from './GifExpertProject';



const journalLink = 'https://github.com/Yeye0809/Journal-app';
const herosLink = 'https://github.com/Yeye0809/heroes-app';
const gifLink = 'https://github.com/Yeye0809/git-gifexpertadd';

export const Main = () => {

  
  return (
    <Grid 
    container
    justifyContent = 'center'
    sx={{mt: 3}}>
        <Typography variant= 'h5' >
           Here you can see the projects i have worked on!
        </Typography>

        <Grid 
            container
            spacing={2}
            sx={{mt:3}}
           
            >

              <Grid item md={4} textAlign="center">
                 <Box> 
                    <Link href={journalLink} underline="hover" >
                       <Typography variant="h5" paragraph>Journal App</Typography>
                     </Link>                
                 </Box>
                 <Box component="div">  
                    <JournalProject />
                 </Box> 

                 <Box mt={ 2 }>
                   <Typography variant="body1" align='justify' sx={{p:1}}> 
                       Journal app is a web application in which you can write down what you did on the day or pending tasks to do, you can also add images in case you want to keep some memories; You can register with a Google account or you can create your own account, so that only you have access to your annotations...
                      <strong>this page was made with React js, React-Router-Dom, Redux-Toolkit and MUI </strong>   
                   </Typography>
                 </Box>
              </Grid>

              <Grid item md={4} textAlign="center">
                 <Box>
                    <Link href={herosLink} underline='hover'>
                        <Typography variant="h5"   paragraph>Heros App</Typography> 
                    </Link>
                 </Box>
                 <Box component="div">   
                    <HerosProject />
                 </Box> 

                 <Box mt={ 2 }>
                   <Typography variant="body1" align='justify' sx={{p:1}}>
                       Heros app is a web application, in which it shows us cards of some Marvel and DC heroes with a little information about the hero...
                       <strong>this page was made with React JS, React-Router-Dom and Bootstrap</strong>
                       </Typography>
                 </Box>
              </Grid>

              <Grid item md={4} textAlign="center"> 
                 <Box>
                    <Link href={gifLink} underline='hover'>
                         <Typography variant="h5"  paragraph>Gif App</Typography> 
                    </Link>
                 </Box>
                 <Box component="div">  
                    <GifExpertProject />
                 </Box> 

                 <Box  mt={ 2 }>
                   <Typography variant="body1" align='justify' sx={{p:1}}>
                       Gif app is a web application which makes the call to an API that shows you gif about anything you search for...
                       <strong>This page was made with React JS </strong>
                  </Typography>
                 </Box>
              </Grid>

               
        </Grid>
            
    </Grid>
  )
}
