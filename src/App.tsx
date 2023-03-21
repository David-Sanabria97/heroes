import {useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import CardComponent from './Components/CardComponent';
import CircularProgress from '@mui/material/CircularProgress';

import {getSuperHeroes} from "./api/getSuperHeroes"
import { Stack } from '@mui/system';




function App  () {
  const [heroes, setHeroes] = useState([])
  
  const getHeroe = async() =>{
    const heroesResponse:any = []

    for(let x = 1; x < 100; x++){
      const response = await getSuperHeroes(x)
      heroesResponse.push(response)
    }
    setHeroes(heroesResponse)
  }

  useEffect(()=>{
    getHeroe()

  },[])

  console.log(heroes)
  return (
    <>
      {heroes.length ===0? 
      <Stack style={{ display: "flex", justifyContent:"center", alignItems: "center", height: "100vh"}}>
        <CircularProgress size={80}/>
      </Stack>
      :
      <Grid container spacing={5}>
        {heroes.map((hero:any, index:number)=>{
            return <Grid item xs={6} md={4} lg={2}> <CardComponent hero={hero} key={index} /> </Grid>
          })}
      </Grid>
        }
     
       
    </>
  );
}

export default App;
