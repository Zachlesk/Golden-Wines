const url = "http://localhost:7014/cotizaciones/all";
const urlPost = "http://localhost:7014/cotizaciones/add";
const urlDelete = "http://localhost:7014/cotizaciones/delete";
const urlUpd = "http://localhost:7014/cotizaciones/update";
const urlGetOne = "http://localhost:7014/cotizaciones/one";
const urlGetOneUsuario = "http://localhost:7014/usuarios/one";

export const getCotizaciones = async () => {
    try {
        const cotizaciones = await fetch(url);
        const datosCotizaciones = await cotizaciones.json();
        return datosCotizaciones;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getCotizacion = async (id) => {
    try {
        const response = await fetch(`${urlGetOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postCotizaciones = async (vinos) => {
    try {
        await fetch(`${urlPost}/`,{
            method: "POST",
            body:JSON.stringify(vinos),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/cotizaciones.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteCotizaciones = async (id) => {
  try {
        await fetch(`${urlDelete}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/cotizaciones.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};
export const putCotizaciones = async (data,id)=>{
    try {
            await fetch(`${urlUpd}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/cotizaciones.html"
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