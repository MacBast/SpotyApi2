

// fetch(URI, PETICION)
// .then(function(respuesta){
//     return(respuesta.json())//garantiza formato Json
// })
// .then(function(respuesta){
//     pintarCanciones(respuesta) //hago lo que quiera con la respuesta
// })
// .catch(function(respuesta){
//     console.log(respuesta)//se muestra el fallo 
// })

export function pintarCanciones(canciones){
    
    let fila=document.getElementById("fila")
    //recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna
        let columna=document.createElement("div")
        columna.classList.add("col")

        //crear la target
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card", "h-100")

        let nombre=document.createElement("h6")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        //crear foto
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //Audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")


        //padres e hijos, del mas adentro al mas afuera
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })
}
