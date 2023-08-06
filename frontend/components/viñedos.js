import { getVinedos, getVinedo, postVinedos, deleteVinedos, putVinedos, getUsuarioOne } from "../apis/vinedosapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid;
    const rolUsuario = await getUsuarioOne(usuarioId);
    const vinedos = await getVinedos();
    const contenedor = document.querySelector(".viñedos");
    vinedos.forEach((element) => {
        const {_id, nombreViñedo, descripcionViñedo, ubicacionViñedo,} = element;
        const {rol} = rolUsuario;
        
        if(rol == "ADMIN") {
        
        contenedor.innerHTML+=`
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="1" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"> ${nombreViñedo} </h5>
                  <h6 class="card-title"> ${descripcionViñedo} </h5>
                  <p class="card-text"> <i class="bi bi-geo-alt-fill"></i> ${ubicacionViñedo} </p>

                  <div class="detalles col-12">
                  <button class="btn-success conoce "> Conoce </button>
                  <button class="btn btn-warning edit-button actualizar" id="
                  ${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
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
        `
    } else if (rol == "USER" || rol == "CATADOR" || rol == "SUMINISTRADOR") {
        contenedor.innerHTML+= `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="1" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"> ${nombreViñedo} /h5>
                  <h6 class="card-title"> ${descripcionViñedo} /h5>
                  <p class="card-text"> <i class="bi bi-geo-alt-fill"></i> ${ubicacionViñedo} </p>
                  <button class="btn-warning conoce"> Conoce </button>
                </div>
              </div>
            </div>
            </div>
        `
    }
});
}



function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};
