import { Box, Grid } from '@material-ui/core';
import React from 'react';


export default function Confirmation({ title, data }){
    return(
       <Grid container>
           <Box>
             {title}
           </Box>
           <Grid item>
               Merci pour votre inscription M.........., vous allez recevoir une confirmation aur votre addresse courriel ....................
             <p>{data.name}</p>  
             <p>{data.surname}</p>
           </Grid>
       </Grid>
          
    )
}