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
    const boton = document.querySelector('.postvinos')
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

        boton.innerHTML=`
        <div class="button-modal container-fluid">
        <i class="plus bi bi-plus-circle fs-1 text-white" data-bs-toggle="modal"data-bs-target="#addCiclistas" type="button" ></i>
      </button>
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
 const formulario = document.querySelector("#formVinos");
 formulario.addEventListener("submit", insertVinos);
 
 function insertVinos(e) {
   e.preventDefault();
   const nombre = document.querySelector("#nombre").value;
   const valor = document.querySelector("#valor").value;
   const gradoAlcohol = document.querySelector("#gradoAlcohol").value;
   const cata = document.querySelector("#cata").value;
   const cepa = document.querySelector("#cepa").value;
   const tipo = document.querySelector("#tipo").value; 
   const pais = document.querySelector("#pais").value; 
   const metodoElaboracion = document.querySelector("#metodoElaboracion").value; 
 
   const registro = {
     nombre,
     valor,
     gradoAlcohol,
     cata,
     cepa,
     tipo,
     pais,
     metodoElaboracion
   };
 
 
   if (validation(registro)) {
     alert("¡Ingresa todos los datos!");
   } else {
     alert("Los datos del vino han sido guardados exitosamente.");
     return postVinos(registro);
 }
 };
 
 
 //Delete
 const eliminar = document.querySelector(".cardisitas");
 eliminar.addEventListener("click",borrarVino);
 
 function borrarVino(e){
     if (e.target.classList.contains("eliminar")) {
         console.log(e.target);
         const idVinos = e.target.getAttribute("id");
         const confir = confirm("¿Quieres eliminar este vino");
         if (confir) {
             deleteVinos(idVinos);
         }
     }
 }
 


 //One
 const infoCategoria = document.querySelector(".cardisitas");
 infoCategoria.addEventListener("click",getInfo);
 
 async function getInfo(e){
     if (e.target.classList.contains("actualizar")) {
         const id = e.target.getAttribute("id");
         const informacion = await getVino(id);
 
         const {_id, nombre, valor, gradoAlcohol, cata, cepa, tipo, pais, metodoElaboracion} = informacion;
 
         const nombreEdit = document.querySelector('#nombreEdit');
         const valorEdit = document.querySelector('#valorEdit');
         const gradoAlcoholEdit = document.querySelector('#gradoAlcoholEdit');
         const cataEdit = document.querySelector('#cataEdit');
         const cepaEdit = document.querySelector('#cepaEdit');
         const tipoEdit = document.querySelector('#tipoEdit');
         const paisEdit = document.querySelector('#paisEdit');
         const metodoElaboracionEdit = document.querySelector('#metodoElaboracionEdit');
         const idEdit = document.querySelector('#idEdit');
 
         nombreEdit.value = nombre;
         valorEdit.value = valor;
         gradoAlcoholEdit.value = gradoAlcohol;
         cataEdit.value = cata;
         cepaEdit.value = cepa;
         tipoEdit.value = tipo;
         paisEdit.value = pais;
         metodoElaboracionEdit.value = metodoElaboracion;
         idEdit.value = _id; 
     }
 };
 
 
 //Update
 const editar = document.querySelector("#formEditVinos");
 editar.addEventListener('submit', actualizar)
 
 function actualizar(e){
     e.preventDefault();
        const nombre = document.querySelector('#nombreEdit').value;
         const valor = document.querySelector('#valorEdit').value;
         const gradoAlcohol = document.querySelector('#gradoAlcoholEdit').value;
         const cata = document.querySelector('#cataEdit').value;
         const cepa = document.querySelector('#cepaEdit').value;
         const tipo = document.querySelector('#tipoEdit').value;
         const pais = document.querySelector('#paisEdit').value;
         const metodoElaboracion = document.querySelector('#metodoElaboracionEdit').value;
         const id = document.querySelector('#idEdit').value;

 
     const datos ={
        nombre,
        valor,
        gradoAlcohol,
        cata,
        cepa,
        tipo,
        pais,
        metodoElaboracion
     }
 
     alert('Datos editados correctamente');
 
     return putVinos(datos,id);
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