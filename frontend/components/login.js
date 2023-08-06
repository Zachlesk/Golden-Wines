import { postLogin } from "../apis/loginapi.js";

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", validar);

function validar(e){
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const datos = {
        email,
        password
    }

    if(validate(datos)){
        postLogin(datos);
    }else{
        alert("Este usuario no es valido");
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element !== "");
}