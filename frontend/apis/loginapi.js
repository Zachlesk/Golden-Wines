const url = "http://localhost:7014/auth/login";

export const postLogin = async (objeto) => {
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(objeto),
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
                localStorage.setItem('loggedInUser', data.token);
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