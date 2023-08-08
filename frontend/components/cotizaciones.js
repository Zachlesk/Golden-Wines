import { getCotizaciones, getCotizacion, postCotizaciones, deleteCotizaciones, putCotizaciones, getUsuarioOne } from "../apis/cotizacionesapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});

    //Load
async function loading() {
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid;
    const rolUsuario = await getUsuarioOne(usuarioId);
    const cotizaciones = await getCotizaciones();
    console.log(cotizaciones);
    const contenedor = document.querySelector(".entradas");
    cotizaciones.forEach((element) => {
        const {_id, nombre, celular, fechaCotizacion, correoElectronico, vinoInteresado, comentarios} = element;
        
        if(rolUsuario.rol == "ADMIN") {
        
            contenedor.innerHTML+=`
            <div class="col-md-12">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title d-flex justify-content-end"> </h5>
              <p class="card-text"> 
                <div class="informacion">
                    <h6> ${nombre} </h6>
                    <br> <h4> ${celular} </h4>
                    <br> <h4> ${correoElectronico} </h4>
                        <button class="sesion2"> <h6> ${fechaCotizacion} </h6> </button>
                        <button class="sesion2"> <h6> ${vinoInteresado} </h6> </button>
                            <button class="sesion2"> <h6> ${comentarios} </h6> </button>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        </div>
        `
    } 
});
}


const form = document.querySelector(".iso");
 form.addEventListener("submit", insertCotizaciones);
 
 function insertCotizaciones(e) {
   e.preventDefault();
   const nombre = document.querySelector("#nombre").value;
   const celular = document.querySelector("#celular").value;
   const fechaCotizacion = document.querySelector("#fechaCotizacion").value;
   const correoElectronico = document.querySelector("#correoElectronico").value;
   const vinoInteresado = document.querySelector("#vinoInteresado").value;
   const comentarios = document.querySelector("#comentarios").value; 
 
   const registro = {
     nombre,
     celular,
     fechaCotizacion,
     correoElectronico,
     vinoInteresado,
     comentarios
   };
 
 
   if (validacion(registro)) {
     alert("¡Ingresa todos los datos!");
   } else {
     alert("La cotización ha sido guardada exitosamente.");
     return postCiclistas(registro);
 }
 };
 
 function validacion(object) {
   return !Object.values(object).every((element) => element !== "");
 };




function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};

