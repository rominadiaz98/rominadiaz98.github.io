
let contenedorPersonajes = document.getElementById('personajes')

fetch('https://rickandmortyapi.com/api/character')
.then((response)=> response.json())
.then((data)=>{

    console.log(data)
    // console.log(data.results)
    

    data.results.map((elemento)=>{

        const contenedorCreado = document.createElement("div")
        
        contenedorCreado.innerHTML = `
        <h4>${elemento.name}</h4>
        <img src="${elemento.image}">
        `;

        contenedorPersonajes.append(contenedorCreado)
    })

})