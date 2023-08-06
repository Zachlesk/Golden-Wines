const url = "http://localhost:7014/vinedos/all";
const urlPost = "http://localhost:7014/vinedos/add";
const urlDelete = "http://localhost:7014/vinedos/delete";
const urlUpd = "http://localhost:7014/vinedos/update";
const urlGetOne = "http://localhost:7014/vinedos/getone";
const urlGetOneUsuario = "http://localhost:7014/usuarios/one";

export const getVinedos = async () => {
    try {
        const vinedos = await fetch(url);
        const datosVinedos = await vinedos.json();
        return datosVinedos;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getVinedo = async (id) => {
    try {
        const response = await fetch(`${urlGetOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postVinedos= async (vinos) => {
    try {
        await fetch(`${urlPost}/`,{
            method: "POST",
            body:JSON.stringify(vinos),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/vinedos.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteVinedos = async (id) => {
  try {
        await fetch(`${urlDelete}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/vinedos.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putVinedos = async (data,id)=>{
    try {
            await fetch(`${urlUpd}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/vinedos.html"
    } catch (error) {
        console.log(error);
    }
};

export const getUsuarioOne = async (id) => {
    try {
        const usuarios  = await fetch(`${urlGetOneUsuario}/${id}`);
        const datos = usuarios.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}