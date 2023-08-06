const url = "http://localhost:7014/vinos/all";
const urlPost = "http://localhost:7014/vinos/add";
const urlDelete = "http://localhost:7014/vinos/delete";
const urlUpd = "http://localhost:7014/vinos/update";
const urlGetOne = "http://localhost:7014/vinos/one";
const urlGetOneUsuario = "http://localhost:7014/usuarios/one";

export const getVinos = async () => {
    try {
        const vinos = await fetch(url);
        const datosVinos = await vinos.json();
        return datosVinos;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getVino = async (id) => {
    try {
        const response = await fetch(`${urlGetOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postVinos = async (vinos) => {
    try {
        await fetch(`${urlPost}/`,{
            method: "POST",
            body:JSON.stringify(vinos),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/vinos.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteVinos = async (id) => {
  try {
        await fetch(`${urlDelete}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/vinos.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putVinos = async (data,id)=>{
    try {
            await fetch(`${urlUpd}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/vinos.html"
    } catch (error) {
        console.log(error);
    }
};

export const getUsuarioOne = async (id) => {
    try {
        const vinos = await fetch(`${urlGetOneUsuario}/${id}`);
        const datos = vinos.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}