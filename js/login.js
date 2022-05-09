let send = document.querySelector(".send");
let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

send.addEventListener("click", (event) => {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    email = email.value;
    localStorage.setItem("email", email);

    password = password.value;
    localStorage.setItem("password", password);
});