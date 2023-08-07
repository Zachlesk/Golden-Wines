import { getCotizaciones, getCotizacion, postCotizaciones, deleteCotizaciones, putCotizaciones, getUsuarioOne } from "../cotizacionesapi.js";

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
    console.log(vinos);
    const contenedor = document.querySelector(".entradas");
    vinos.forEach((element) => {
        const {_id, nombre, celular, fechaCotizacion, correoElectronico, vinoInteresado, comentarios} = element;
        
        if(rolUsuario.rol == "ADMIN") {
        
            contenedor.innerHTML+=`
        <tr>65+
        <th scope="row">${_id}</th>
            <td>${nombreProveedor}</td>
            <td>${tipoProveedor}</td>
            <td>${especialidadProveedor}</td>
            <td><button class="btn btn-dark perfil" id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModalPerfil"> Perfil </button></td>
            <td><button class="btn btn-light contacto" data-bs-toggle="modal" data-bs-target="#exampleModal" id="${_id}"> Contacto </button></td>
            <td><button class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}"> Editar </button></td>
            <td><button class="btn btn-danger delete" id="${_id}"> Borrar </button></td>
        </tr>
    
        `
    } 
});
}


const form = document.querySelector(".iso");
 formulario.addEventListener("submit", insertCotizaciones);
 
 function insertCotizaciones(e) {
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


//DELETE
const laTabla = document.querySelector(".table");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Proveedores = e.target.getAttribute("id");
        const confir = confirm("¿Seguro que deseas eliminar el Proveedor?")
        if(confir){
            deleteProveedores(id_Proveedores);
        }
    }

    if(e.target.classList.contains("edit")){    
        const id_ProveedoresEdit = e.target.getAttribute("id");
        console.log(id_ProveedoresEdit);
        const datos = await getProveedor(id_ProveedoresEdit);
        console.log(datos);
        const nombreProveedor = document.querySelector('#nombreProveedorEdit')
        const tipoProveedor = document.querySelector('#tipoProveedorEdit')
        const especialidadProveedor = document.querySelector('#especialidadProveedorEdit')
        nombreProveedor.value = datos.nombreProveedor;
        tipoProveedor.value = datos.tipoProveedor;
        especialidadProveedor.value = datos.especialidadProveedor;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const nombreProveedor = document.querySelector("#nombreProveedorEdit").value
            const tipoProveedor = document.querySelector("#tipoProveedorEdit").value
            const especialidadProveedor = document.querySelector("#especialidadProveedorEdit").value
            
            const datosUpd = {
                nombreProveedor,
                tipoProveedor,
                especialidadProveedor
            }

            console.log(datosUpd);
            if(validation(datosUpd)){
                putProveedores(datosUpd, id_ProveedoresEdit); 
            }
        }
    }

    if(e.target.classList.contains("contacto")){
        const contactoId = (e.target.getAttribute("id"));
        const datosContacto = await getProveedor(contactoId);
        console.log(datosContacto);
        const body = document.querySelector(".modal-body");
        body.innerHTML = `
            <p><strong>Email:</strong>${datosContacto.email}</p>
            <p><strong>Ubicacion:</strong>${datosContacto.ubicacion}</p>
            <p><strong>Numero:</strong>${datosContacto.numero}</p>
        `
    } 

    if(e.target.classList.contains("perfil")){
        const proveedorId = e.target.getAttribute("id");
        const proveedorPerfil = await getProveedorDetalles(proveedorId);
        console.log(proveedorPerfil);
        const bodyPerfil = document.querySelector(".modal-bodyPerfil");
        bodyPerfil.innerHTML = `
            <p><strong>Email:</strong>${proveedorPerfil[0].descripcionProveedor}</p>
            <p><strong>Ubicacion:</strong>${proveedorPerfil[0].calificacionProveedor}</p>
            <p><strong>Numero:</strong>${proveedorPerfil[0].cataProveedor}</p>
            <p><strong>Email:</strong>${proveedorPerfil[0].numeroBodegas}</p>
            <p><strong>Ubicacion:</strong>${proveedorPerfil[0].categoriaProductos}</p>
        `
    } 

} 

const formulario = document.querySelector('#formularioVarios');
formulario.addEventListener("submit", postProovedor);

function postProovedor(e){
    e.preventDefault();
    const nombreProveedor = document.querySelector('#proveedor').value
    const tipoProveedor = document.querySelector('#tipoProveedor').value
    const especialidadProveedor = document.querySelector('#especialidadProveedor').value
    const email = document.querySelector('#email').value
    const ubicacion = document.querySelector('#ubicacion').value
    const numero = document.querySelector('#numero').value
    /* input proveedoresDetalles */
    const descripcionProveedor = document.querySelector('#descripcionProveedor').value
    const calificacionProveedor = document.querySelector('#calificacionProveedor').value
    const cataProveedor = document.querySelector('#cataProveedor').value
    const numeroBodegas = document.querySelector('#numeroBodegas').value
    const categoriaProductos = document.querySelector('#categoriaProductos').value

    const datos = {
        nombreProveedor,
        tipoProveedor,
        especialidadProveedor,
        email,
        ubicacion,
        numero
    }

    const datosDetalles = {
        descripcionProveedor,
        calificacionProveedor,
        cataProveedor,
        numeroBodegas,
        categoriaProductos
    }

    if(validation(datos)){
        alert("si pasa");
        postProveedores(datos)
    }else{
        alert("no pasa")
    }
}

function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};

