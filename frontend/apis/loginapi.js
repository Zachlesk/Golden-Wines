const url = "http://localhost:7014/auth/login";

export const postLogin = async (object) => {
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(object),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
            if (data.success) {
                alert(data.message); 
                localStorage.removeItem('token');
                window.location.href = "../views/dashboard.html";
                localStorage.setItem('token', data.token);
                const datos = localStorage.getItem('token');
                console.log(datos);
            } else {
                alert("Este usuario no existe en nuestro registro"); 
            }
            
        })
    } catch (error) {
        console.log(error);
    }
}