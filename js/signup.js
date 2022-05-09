let send = document.querySelector(".send");
let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

send.addEventListener("click", (event) => {
    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let numero = document.querySelector("#numero");


    nombre = nombre.value;
    localStorage.setItem("nombre", nombre);

    email = email.value;
    localStorage.setItem("email", email);

    password = password.value;
    localStorage.setItem("password", password);

    numero = numero.value;
    localStorage.setItem("numero", numero);
});