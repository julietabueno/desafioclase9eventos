
/* Agrego la opcion de cambiar color de body */
const inputColor = document.getElementById("inputColor")

inputColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputColor.value
})

//creo el constructor de Usuarios
class Usuario {
    constructor(nombreDeUsuario = " ", apellido = " ", pesosInvertidos = 1, dolaresInvertidos = 1) {
        this.nombreDeUsuario = nombreDeUsuario
        this.apellido = apellido
        this.pesosInvertidos = pesosInvertidos
        this.dolaresInvertidos = dolaresInvertidos
    }
}
//creo array vacio
const usuarios = []

/* Formulario para carga de datos */
const form = document.getElementById("idForm")
const divUsuarios = document.getElementById("divUsuarios")
const botonUsuarios = document.getElementById("botonUsuarios")

form.addEventListener("submit", (event) => {
    event.preventDefault()//evito que se recargue la pagina y envie la info a un servidor que no tengo. porque no tengo base de datos.

    let nombreDeUsuario = document.getElementById("idName").value
    let apellido = document.getElementById("idLast").value
    let pesosInvertidos = document.getElementById("idPesos").value
    let dolaresInvertidos = document.getElementById("isDolares").value

    //creo un nuevo objeto usuario para agregar desdpues al array
    const usuario = new Usuario(nombreDeUsuario, apellido, pesosInvertidos, dolaresInvertidos)

    usuarios.push(usuario)
    console.log(usuarios)

    form.reset()
})

botonUsuariosP.addEventListener("click", () => {
    usuarios.forEach(usuarios => {
        divUsuarios.innerHTML += `
        <div class="cardUsuarios p-1 rounded" style="width: 18rem;">
        <img src="img/fondoCrypto.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${usuarios.nombreDeUsuario} ${usuarios.apellido}</h5>
            <p class="card-text"> $ ${usuarios.pesosInvertidos}</p>
        </div>
        </div>`
    })
})

botonUsuariosD.addEventListener("click", () => {
    usuarios.forEach(usuarios => {
        divUsuarios.innerHTML += `
        <div class="cardUsuarios p-1 rounded" style="width: 18rem;">
        <img src="img/fondoCrypto.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${usuarios.nombreDeUsuario} ${usuarios.apellido}</h5>
            <p class="card-text"> USD ${usuarios.dolaresInvertidos}</p>
        </div>
        </div>`
    })
})
