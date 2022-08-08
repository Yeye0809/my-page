
import { useState } from 'react'



export const useCounter = () => {

    const [count, setCount] = useState( 0 )

    const next = () => {
        setCount( count + 1);
        console.log(count)
        
    }
    const back = () => {
        setCount( count - 1);
        console.log(count)
        
    }

    return {
        next,
        back, 
        count
    }



    
  // return (
  //   <Grid>

  //      <Grid>
  //          <img src={`./assets/JournalApp/${carrowsel[count]}.PNG`} alt="" />
  //      </Grid>


  //       <Button 
  //       disabled = {( count === 2 ? 'true' : null)}
  //       onClick={ onCount }
  //       variant='contained' > +1 </Button>

  //       <Button onClick={ onCountM }
  //       variant='contained' > -1 </Button>


  //   </Grid>
  // )
}
