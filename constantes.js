import { generarToken } from "./servicioGenerarToken.js"

//definir constantes
export const URI_TOP_TRACKS='https://api.spotify.com/v1/artists/7ltDVBr6mKbRvohxheJ9h1/top-tracks?market=US'


// datos de envio
export const URI_GENERAR_TOKEN='https://accounts.spotify.com/api/token'

const DATO1="client_id=cdf3c4babb194cb5819a87e2843c64e3"
const DATO2="client_secret=7d4f13d2bffb4f1eb0c57da727abfec3"
const DATO3="grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`


export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}

//se llama a la funcion y que trae el token y se guarda en una var
let token =await generarToken()
const TOKEN=token.token_type+" "+token.access_token

export const PETICION_TOP_TRACKS={
    method:"GET",
    headers:{Authorization:TOKEN}
}

