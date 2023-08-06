import { getProveedores, getUsuarioOne } from "../apis/proveedoresapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid;
    const rolUsuario = await getUsuarioOne(usuarioId);
    const vinos = await getProveedores();
    const contenedor = document.querySelector(".table");
    vinos.forEach((element) => {
        const {_id, nombreProveedor, tipoProveedor, contactoProveedor, ubicacionProveedor, especialidadProveedor} = element;
        const {rol} = rolUsuario;
        
        if(rol == "ADMIN") {
        
        contenedor.innerHTML+=`
        <tr>
        <th scope="row">${_id}</th>
            <td>${nombreProveedor}</td>
            <td>${tipoProveedor}</td>
            <td>${especialidadProveedor}</td>
            <td><button class="btn btn-dark perfil" id="${_id}"> Perfil </button></td>
            <td><button class="btn btn-light contacto" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}"> Contacto </button></td>
            <td><button class="btn btn-warning editar" id="${_id}"> Editar </button></td>
            <td><button class="btn btn-danger delete" id="${_id}"> Borrar </button></td>
        </tr>
    
        `
    } else if (rol == "USER" || rol == "CATADOR" || rol == "SUMINISTRADOR") {
        contenedor.innerHTML+= `
        <tr>
        <th scope="row"></th>
    <td>${nombreProveedor}</td>
    <td>${tipoProveedor}</td>
    <td>${especialidadProveedor}</td>
    <td><button class="btn btn-dark delete" id="${_id}"> Perfil </button></td>
    <td><button class="btn btn-light edit" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}"> Contacto </button></td>
    </tr>` 
        
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

