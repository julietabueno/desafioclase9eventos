
const inputColor = document.getElementById("inputColor")

inputColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputColor.value
})


//creo el constructor de Usuarios
class Usuario {
    constructor(id, nombreDeUsuario = " ", apellido = " ", pesosInvertidos = 1, dolaresInvertidos = 1) {
        this.id = id;
        this.nombreDeUsuario = nombreDeUsuario
        this.apellido = apellido
        this.pesosInvertidos = pesosInvertidos
        this.dolaresInvertidos = dolaresInvertidos
    }
}

const usuario1 = new Usuario(1, "Julieta,", "Bueno", 20000, 500)
const usuario2 = new Usuario(2, "Pablo,", "Destefano", 50000, 100)
const usuario3 = new Usuario(3, "Claudia,", "Filippelli", 5000, 2300)
const usuario4 = new Usuario(4, "Oscar,", "Bueno", 100000, 900)
const usuario5 = new Usuario(5, "Mariana,", "Bueno", 10000, 20000)


const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5]

const divUsuarios = document.getElementById("usuarios")

usuarios.forEach(usuarioArray => {
    //Inserto un HTML creando una plantilla de texto para ahorrar codigo - TEMPLATE 
    divUsuarios.innerHTML += `
    <div class="cardUsuarios p-1 rounded" id="usuario${usuarioArray.id}" style="width: 18rem;">
    <img src="img/fondoCrypto.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${usuarioArray.nombreDeUsuario} ${usuarioArray.apellido}</h5>
        <p class="card-text"> $ ${usuarioArray.pesosInvertidos}</p>
        <p class="card-text"> USD ${usuarioArray.dolaresInvertidos}</p>
        <a href="#" class="btn btn-warning">Go somewhere</a>
    </div>
  </div>
    `
})


//------------------------------------------------------------------------------------------------------------
/*
//CREO LAS FUNCIONES para interactuar con el usuario
//Para buscar un usuario
function buscarUsuario(usuarios) {
   let nombreUsuario = prompt("Ingrese un nombre de usuario")

   let usuarioBuscado = usuarios.find(usuario => usuario.nombreDeUsuario == nombreUsuario)

   if (usuarioBuscado == undefined) {
       console.log("Usuario no encontrado")
   } else {
       console.log(usuarioBuscado)
   }
}


//Para buscar todos los usuarios que coincidan con ... $ Invertidos
function buscarUsuariosPesos(usuarios) {
   let pesosInvertidos = parseFloat(prompt("Ingrese el monto $ que desea consultar"))
   let usuariosBuscados = usuarios.filter(usuario => usuario.pesosInvertidos >= pesosInvertidos)

   if (usuariosBuscados.length == 0) {
       console.log("No hay usuarios con dichas caracteristicas")
   } else {
       console.log(usuariosBuscados)
   }
}


//Para buscar todos los usuarios que coincidan con ... u$s Invertidos
function buscarUsuariosDolares(usuarios) {
   let dolaresInvertidos = parseFloat(prompt("Ingrese el monto u$s que desea consultar"))
   let usuariosBuscados = usuarios.filter(usuario => usuario.dolaresInvertidos >= dolaresInvertidos)

   if (usuariosBuscados.length == 0) {
       console.log("No hay usuarios con dichas caracteristicas")
   } else {
       console.log(usuariosBuscados)
   }
}

//Fn para ordenar los usuarios por $ invertidos
function ordenarUsuariosPesos(usuarios) {

   let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar por los $ invertidos de menor a mayor, 2 para ordenar de mayor a menor"))

   if (metodoOrdenamiento === 1) {
       console.log(usuarios.sort((a, b) => a.pesosInvertidos - b.pesosInvertidos))
   } else if (metodoOrdenamiento === 2) {
       console.log(usuarios.sort((a, b) => b.pesosInvertidos - a.pesosInvertidos))
   }
}

//Fn para ordenar los usuarios por u$s invertidos
function ordenarUsuariosDolares(usuarios) {

   let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar  por los u$s invertidos de menor a mayor, 2 para ordenar de mayor a menor"))

   if (metodoOrdenamiento === 1) {
       console.log(usuarios.sort((a, b) => a.dolaresInvertidos - b.dolaresInvertidos))
   } else if (metodoOrdenamiento === 2) {
       console.log(usuarios.sort((a, b) => b.dolaresInvertidos - a.dolaresInvertidos))
   }
}

//------------------------------------------------------------------------------------------------------------

//creo array vacio
const usuarios = []
//creo las variables locales
let pesosInvertidos, dolaresInvertidos, nombreDeUsuario, apellido, continua

//Solicitud de datos al usuario
do {
   //creo la validacion de los textos
   do {
       nombreDeUsuario = prompt("Ingrese un nombre del usuario").toLowerCase()
       apellido = prompt("Ingrese un apellido del usuario").toLowerCase()
       //Si ingresan datos vacios, los vuelvo a pedir
       if (nombreDeUsuario.length == 0) {
           alert("Por favor ingrese un nombre de usuario válido")
       } else if (apellido.length == 0) {
           alert("Por favor ingrese un apellido de usuario válido")
       }

   } while ((nombreDeUsuario.length == 0 || apellido.length == 0))

   //creo la validacion de los numerosÏ
   do {
       pesosInvertidos = parseFloat(prompt("Ingrese los $ que desea ingresar."))
       dolaresInvertidos = parseFloat(prompt("Ingrese los U$S que desea ingresar."))

       //Si ingresan datos letras, vuelvo a pedir valores
       if ((isNaN(pesosInvertidos) || isNaN(dolaresInvertidos)) || (pesosInvertidos <= 0 || dolaresInvertidos <= 0)) {
           alert("Por favor montos válidos")
       }

   } while ((isNaN(pesosInvertidos) || isNaN(dolaresInvertidos)) || (pesosInvertidos <= 0 || dolaresInvertidos <= 0))

   const usuario = new Usuario(nombreDeUsuario, apellido, pesosInvertidos, dolaresInvertidos)

   //agrego la info ingresada al array
   usuarios.push(usuario)

   continua = prompt("¿Desea ingresar mas usuarios? Por favor responda SI o NO").toLowerCase()
} while (continua != "no")


//creo la consulta por los metodos
do {
   respuesta = parseInt(prompt(`Ingrese numero para:
       1- Buscar un nombre de usuario
       2- Buscar usuarios según los pesos ingresados
       3- Buscar usuarios según los dolares ingresados
       4- Ordenar de menor a mayor segun los pesos ingresados
       5- Ordenar de menor a mayor segun los pesos ingresados
   `))
} while (respuesta < 1 || respuesta > 5)

//Creo un switch para la respuesta elegida
switch (respuesta) {
   case 1:
       buscarUsuario(usuarios)
       break
   case 2:
       buscarUsuariosPesos(usuarios)
       break
   case 3:
       buscarUsuariosDolares(usuarios)
       break
   case 4:
       ordenarUsuariosPesos(usuarios)
       break
   case 5:
       ordenarUsuariosDolares(usuarios)
       break
   default:
       alert("Opcion no valida")
       break
}


//veo el array en consola
//console.log(usuarios) */