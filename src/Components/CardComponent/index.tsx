import { useState} from "react"

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';

import "./CardComponent.css"

interface ICard {
    hero: any
}


const CardComponent = (props:ICard) =>{

    const { hero }= props

    const [ direccion, setDireccion] = useState(true)

    const handleClick = () => {
        setDireccion(!direccion);
      };

return <Box sx={{ maxWidth: 750}} onClick={handleClick}> 
            <Card  sx={{height:"30vh"}}> 
                {direccion ? 
                    <CardMedia  
                    component="img"
                    height="100%"
                    image={hero.image?.url}/> : 
                    <CardContent > 
                         <Stack marginBottom={"12px"} fontSize={"2rem"}> 
                         {hero.name}
                        </Stack>
                        <Stack marginBottom={"12px"}> 
                            Apariencia
                        </Stack>
                        <Grid container marginBottom={"12px"}>
                            <Grid item xs={6} > Genero: </Grid>
                            <Grid item xs={6} > {hero.appearance.gender}</Grid>
                            <Grid item xs={6} > Raza: </Grid>
                            <Grid item xs={6} > {hero.appearance.race}</Grid>
                        </Grid>
                        <Stack marginBottom={"12px"}> 
                            Ocupacion
                        </Stack>
                        <Grid container>
                            <Grid item xs={12} > {hero.work.occupation}</Grid>
                        </Grid>
                        
                    </CardContent>}
                        
                
            </Card>
        </Box>

}

export default CardComponent