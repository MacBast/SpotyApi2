import{URI_TOP_TRACKS} from './constantes.js'
import {PETICION_TOP_TRACKS} from './constantes.js'

export async function consumirCanciones(){
    let respuesta=await fetch(URI_TOP_TRACKS,PETICION_TOP_TRACKS)
    return respuesta.json()
}