const url = "http://localhost:7014/usuarios/add";

export const postUsers = async (object) => {
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(object),
            headers:{
                "Content-Type":"application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}