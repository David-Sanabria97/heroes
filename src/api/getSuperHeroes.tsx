
import axios from 'axios';
import { token,  baseURL} from "./Credentials"


export const getSuperHeroes = async (id:number) =>{
   const response = await axios({
        method: 'get',
        url: `${baseURL}${token}/${id}`,
        responseType: 'stream'
      })
        .then( (response) => {
          return {respuesta: response.data}
        });

    return JSON.parse(response.respuesta)
}

