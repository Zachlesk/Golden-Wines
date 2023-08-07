import { deleteProveedores, getProveedores, getUsuarioOne, postProveedores, getProveedor, putProveedores, getProveedorDetalles, enviarDoble } from "../apis/proveedoresapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});

    //Load
async function loading() {
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid;
    const rolUsuario = await getUsuarioOne(usuarioId);
    console.log(rolUsuario);
    const vinos = await getProveedores();
    console.log(vinos);
    const contenedor = document.querySelector(".table");
    vinos.forEach((element) => {
        const {_id, nombreProveedor, tipoProveedor, especialidadProveedor} = element;
        
        if(rolUsuario.rol == "ADMIN") {
        
            contenedor.innerHTML+=`
        <tr>
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
    } else if (rolUsuario.rol == "USER" || rolUsuario.rol == "CATADOR" || rolUsuario.rol == "SUMINISTRADOR") {
        contenedor.innerHTML+= `
        <tr>
        <th scope="row"></th>
    <td>${nombreProveedor}</td>
    <td>${tipoProveedor}</td>
    <td>${especialidadProveedor}</td>
    <td><button class="btn btn-dark perfil" id="${_id}"> Perfil </button></td>
    <td><button class="btn btn-light contacto" data-bs-toggle="modal" data-bs-target="#exampleModalPerfil" id="${_id}"> Contacto </button></td>
    </tr>` 
        
    }
});
}

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
        const datosDetalles = await getProveedorDetalles(id_ProveedoresEdit)
        console.log(datosDetalles[0]);
        const nombreProveedor = document.querySelector('#nombreProveedorEdit')
        const tipoProveedor = document.querySelector('#tipoProveedorEdit')
        const especialidadProveedor = document.querySelector('#especialidadProveedorEdit')
        const email = document.querySelector("#emailEdit")
        const ubicacion = document.querySelector("#ubicacionEdit")
        const numero = document.querySelector("#numeroEdit")
        /* DETALLES */
        const descripcionProveedor = document.querySelector('#descripcionProveedorEdit')
        const calificacionProveedor = document.querySelector('#calificacionProveedorEdit')
        const cataProveedor = document.querySelector('#CataProveedorEdit')
        const numeroBodegas = document.querySelector('#numeroBodegasEdit')
        const categoriaProductos = document.querySelector('#categoriaProductosEdit')

        nombreProveedor.value = datos.nombreProveedor;
        tipoProveedor.value = datos.tipoProveedor;
        especialidadProveedor.value = datos.especialidadProveedor;
        email.value = datos.email;
        ubicacion.value = datos.ubicacion;
        numero.value = datos.numero;
        descripcionProveedor.value = datosDetalles[0].descripcionProveedor;
        calificacionProveedor.value = datosDetalles[0].calificacionProveedor;
        cataProveedor.value = datosDetalles[0].cataProveedor;
        numeroBodegas.value = datosDetalles[0].numeroBodegas;
        categoriaProductos.value = datosDetalles[0].categoriaProductos;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const nombreProveedor = document.querySelector("#nombreProveedorEdit").value
            const tipoProveedor = document.querySelector("#tipoProveedorEdit").value
            const especialidadProveedor = document.querySelector("#especialidadProveedorEdit").value
            const email = document.querySelector("#emailEdit").value
            const ubicacion = document.querySelector("#ubicacionEdit").value
            const numero = document.querySelector("#numeroEdit").value
            /* Proveedor Detalles */
            const descripcionProveedor = document.querySelector('#descripcionProveedorEdit').value
            const calificacionProveedor = document.querySelector('#calificacionProveedorEdit').value
            const cataProveedor = document.querySelector('#CataProveedorEdit').value
            const numeroBodegas = document.querySelector('#numeroBodegasEdit').value
            const categoriaProductos = document.querySelector('#categoriaProductosEdit').value
            
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
                categoriaProductos,
                proveedor: id_ProveedoresEdit
            }

            const enviar = {
                data1: datos,
                data2: datosDetalles
            }

            console.log(enviar);
            if(validation(enviar)){
                putProveedores(enviar, id_ProveedoresEdit); 
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
            <p><strong>Descripcion:</strong>${proveedorPerfil[0].descripcionProveedor}</p>
            <p><strong>Calificacion:</strong>${proveedorPerfil[0].calificacionProveedor}</p>
            <p><strong>CataProveedor:</strong>${proveedorPerfil[0].cataProveedor}</p>
            <p><strong>NumeroBodegas:</strong>${proveedorPerfil[0].numeroBodegas}</p>
            <p><strong>CategoriaProductos:</strong>${proveedorPerfil[0].categoriaProductos}</p>
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
    const cataProveedor = document.querySelector('#CataProveedor').value
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

    const datosDoble = {
        data1: datos,
        data2: datosDetalles
    }

    if(validation(datos)){
        alert("si pasa");
        enviarDoble(datosDoble);
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

