import { getVinos, getVino, postVinos, deleteVinos, putVinos, getUsuarioOne } from "../apis/vinosapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid;
    const rolUsuario = await getUsuarioOne(usuarioId);
    const vinos = await getVinos();
    const contenedor = document.querySelector(".cardisitas");
    vinos.forEach((element) => {
        const {_id, nombre, valor, gradoAlcohol, cata, cepa, tipo, pais, metodoElaboracion} = element;
        const {rol} = rolUsuario;
        
        if(rol == "ADMIN") {
        
        contenedor.innerHTML+=`
        <div class="col-md-4">
        <div class="card">
          <div class="card-body">
          <h5 class="card-title d-flex justify-content-end">  <i class="bi bi-heart-fill"></i> </h5>
          <p class="card-text"> 
            <img src="https://dislicoresqa.vtexassets.com/arquivos/ids/282140-800-auto?v=637901739258800000&width=800&height=auto&aspect=true" class="vinosimage">
            <div class="infovino">
                <h6> ${valor} </h6>
                <br> <h4> ${nombre} </h4>
                <div class="row">
                    <div class="col-6">
                        <button class="sesion"> <h6> ${cepa} </h6> </button>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <i class="bi bi-cart-fill"></i>
                    </div>
                    <div class="detalles col-12 d-flex justify-content-center">
                    <button class="btn btn-warning edit-button actualizar" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger delete-button eliminar" id="${_id}">
                <i class="bi bi-trash3-fill"></i>
                </button>
            </div>
                </div>
            </div>
      </div>
    </div>
    </div>
        `
    } else if (rol == "USER" || rol == "CATADOR" || rol == "SUMINISTRADOR") {
        contenedor.innerHTML+= `
        <div class="col-md-4">
        <div class="card">
          <div class="card-body">
          <h5 class="card-title d-flex justify-content-end">  <i class="bi bi-heart-fill"></i> </h5>
          <p class="card-text"> 
            <img src="https://dislicoresqa.vtexassets.com/arquivos/ids/282140-800-auto?v=637901739258800000&width=800&height=auto&aspect=true" class="vinosimage">
            <div class="infovino">
                <h6> ${valor} </h6>
                <br> <h4> ${nombre} </h4>
                <div class="row">
                    <div class="col-6">
                        <button class="sesion"> <h6> ${cepa} </h6> </button>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <i class="bi bi-cart-fill"></i>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </div>
        `
    }
});

/* FILTRADOS */
const buscador = document.querySelector(`#buscadorFiltrado`);

buscador.addEventListener('input', (e) => {
    parametros.nombre = e.target.value;
    limpiar();
    filtrarVino();
});

const parametros = {
    nombre: '',
};

function filtrarVino() {
    const resultado = vinos
    .filter(filtrarVinoName);
    actualizarVinos(resultado);
}

function filtrarVinoName(song) {
    if (parametros.nombre) {
        return song.nombre.toLowerCase().includes(parametros.nombre.toLowerCase());
    }
    return true;
}

function limpiar() {
    let vinosContainer = document.querySelector('.cardisitas');
    vinosContainer.innerHTML = '';
}

function actualizarVinos(songs) {
    songs.forEach(song => {
        const {_id, nombre, valor, gradoAlcohol, cata, cepa, tipo, pais, metodoElaboracion} = song
        const contenedor = document.querySelector(".cardisitas");
        const {rol} = rolUsuario;

        if(rol == "ADMIN") {
        
            contenedor.innerHTML+=`
            <div class="col-md-4">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title d-flex justify-content-end">  <i class="bi bi-heart-fill"></i> </h5>
              <p class="card-text"> 
                <img src="https://dislicoresqa.vtexassets.com/arquivos/ids/282140-800-auto?v=637901739258800000&width=800&height=auto&aspect=true" class="vinosimage">
                <div class="infovino">
                    <h6> ${valor} </h6>
                    <br> <h4> ${nombre} </h4>
                    <div class="row">
                        <div class="col-6">
                            <button class="sesion"> <h6> ${cepa} </h6> </button>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <i class="bi bi-cart-fill"></i>
                        </div>
                        <div class="detalles col-12 d-flex justify-content-center">
                        <button class="btn btn-warning edit-button actualizar" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                    <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-danger delete-button eliminar" id="${_id}">
                    <i class="bi bi-trash3-fill"></i>
                    </button>
                </div>
                    </div>
                </div>
          </div>
        </div>
        </div>
            `
        } else if (rol == "USER" || rol == "CATADOR" || rol == "SUMINISTRADOR") {
            contenedor.innerHTML+= `
            <div class="col-md-4">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title d-flex justify-content-end">  <i class="bi bi-heart-fill"></i> </h5>
              <p class="card-text"> 
                <img src="https://dislicoresqa.vtexassets.com/arquivos/ids/282140-800-auto?v=637901739258800000&width=800&height=auto&aspect=true" class="vinosimage">
                <div class="infovino">
                    <h6> ${valor} </h6>
                    <br> <h4> ${nombre} </h4>
                    <div class="row">
                        <div class="col-6">
                            <button class="sesion"> <h6> ${cepa} </h6> </button>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <i class="bi bi-cart-fill"></i>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        </div>
            `
        };
    });
}

}

 //Insert
 const formulario = document.querySelector("#formCiclistas");
 formulario.addEventListener("submit", insertCiclistas);
 
 function insertCiclistas(e) {
   e.preventDefault();
   const nombre = document.querySelector("#nombre").value;
   const apodo = document.querySelector("#apodo").value;
   const nacionalidad = document.querySelector("#nacionalidad").value;
   const equipo = document.querySelector("#equipo").value;
   const disciplina = document.querySelector("#disciplina").value;
   const tipo = document.querySelector("#tipo").value; 
 
   const registro = {
     nombre,
     apodo,
     nacionalidad,
     equipo,
     disciplina,
     tipo
   };
 
 
   if (validacion(registro)) {
     alert("¡Ingresa todos los datos!");
   } else {
     alert("Los datos del ciclista han sido guardados exitosamente.");
     return postCiclistas(registro);
 }
 };
 
 function validacion(object) {
   return !Object.values(object).every((element) => element !== "");
 };
 
 
 //Delete
 const eliminar = document.querySelector(".cardisitas");
 eliminar.addEventListener("click",borrarCiclista);
 
 function borrarCiclista(e){
     if (e.target.classList.contains("eliminar")) {
         console.log(e.target);
         const idCiclista = e.target.getAttribute("id");
         const confir = confirm("¿Quieres eliminar este ciclista?");
         if (confir) {
             deleteCiclistas(idCiclista);
         }
     }
 }
 
 
 //One
 const infoCategoria = document.querySelector(".cardisitas");
 infoCategoria.addEventListener("click",getInfo);
 
 async function getInfo(e){
     if (e.target.classList.contains("actualizar")) {
         const id = e.target.getAttribute("id");
         const informacion = await getCiclista(id);
 
         const {_id, nombre,apodo, equipo,nacionalidad, disciplina, tipo} = informacion;
 
         const nombreEdit = document.querySelector('#nombreEdit');
         const apodoEdit = document.querySelector('#apodoEdit');
         const equipoEdit = document.querySelector('#equipoEdit');
         const nacionalidadEdit = document.querySelector('#nacionalidadEdit');
         const disciplinaEdit = document.querySelector('#disciplinaEdit');
         const tipoEdit = document.querySelector('#tipoEdit');
         const idEdit = document.querySelector('#idEdit');
 
         nombreEdit.value = nombre;
         apodoEdit.value = apodo;
         equipoEdit.value = equipo;
         nacionalidadEdit.value = nacionalidad;
         disciplinaEdit.value = disciplina;
         tipoEdit.value = tipo;
         idEdit.value = _id; 
     }
 };
 
 
 //Update
 const editar = document.querySelector("#formEditCiclista");
 editar.addEventListener('submit', actualizar)
 
 function actualizar(e){
     e.preventDefault();
     const id = document.querySelector('#idEdit').value;
     const nombre = document.querySelector('#nombreEdit').value;
     const apodo = document.querySelector('#apodoEdit').value;
     const equipo = document.querySelector('#equipoEdit').value;
     const nacionalidad = document.querySelector('#nacionalidadEdit').value;
     const disciplina = document.querySelector('#disciplinaEdit').value;
     const tipo = document.querySelector('#tipoEdit').value;
 
     const datos ={
         nombre,
         apodo,
         equipo,
         nacionalidad,
         disciplina,
         tipo
     }
 
     alert('Datos editados correctamente');
 
     return putCiclistas(datos,id);
 }; 

function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};





/* $(document).ready(function() {
    // Obtén el elemento del buscador
    var buscador = $('#buscadorFiltrado');
  
    // Maneja el evento de entrada en el buscador
    buscador.on('input', function() {
      // Obtén el valor del buscador y conviértelo a minúsculas para la comparación
      var filtro = buscador.val().toLowerCase();
      
      // Recorre cada tarjeta dentro de la clase container cardis
      $('.container.cardis .cardisitas .card').each(function() {
        var tituloTarjeta = $(this).find('.card-title').text().toLowerCase();
        var nombreTarjeta = $(this).find('h4').text().toLowerCase(); // Obtén el nombre de la tarjeta
        
        // Comprueba si el título de la tarjeta o el nombre coincide con el filtro
        if (tituloTarjeta.includes(filtro) || nombreTarjeta.includes(filtro)) {
          $(this).show(); // Muestra la tarjeta si coincide
        } else {
          $(this).hide(); // Oculta la tarjeta si no coincide
        }
      });
    });
  });  */  