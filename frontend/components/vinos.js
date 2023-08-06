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
            <img src="" class="vinosimage">
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
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};