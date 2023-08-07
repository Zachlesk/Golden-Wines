const url = "http://localhost:7014/proveedores/all";
const urlPost = "http://localhost:7014/proveedores/add";
const urlDelete = "http://localhost:7014/proveedores/delete";
const urlUpd = "http://localhost:7014/proveedores/update";
const urlGetOne = "http://localhost:7014/proveedores/one";
const urlGetOneUsuario = "http://localhost:7014/usuarios/one";
const proveedorDetallesOne = "http://localhost:7014/proveedorDetalles/one";

export const getProveedorDetalles = async (id_proveedor) => {
    try {
        const extract = await fetch(`${proveedorDetallesOne}/${id_proveedor}`);
        const datos = extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const getProveedores = async () => {
    try {
        const proveedores = await fetch(url);
        const datosProveedores = await proveedores.json();
        return datosProveedores;
    } catch (error) {
        console.log(error);
    }
};

export const getProveedor = async (id) => {
    try {
        const response = await fetch(`${urlGetOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postProveedores = async (vinos) => {
    try {
        await fetch(`${urlPost}/`,{
            method: "POST",
            body:JSON.stringify(vinos),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/proveedores.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteProveedores = async (id) => {
  try {
        await fetch(`${urlDelete}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/proveedores.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putProveedores = async (data,id)=>{
    try {
            await fetch(`${urlUpd}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/proveedores.html"
    } catch (error) {
        console.log(error);
    }
};

export const getUsuarioOne = async (id) => {
    try {
        const extract = await fetch(`${urlGetOneUsuario}/${id}`);
        const datos = extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}