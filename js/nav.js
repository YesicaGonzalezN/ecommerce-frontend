const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <div class="nav-bar">
            <div class="nav-item">
                <a href="/index.html">Juana's</a>
            </div>
            <div class="nav-item">
                <div class="search">
                    <input type="text" placeholder="Buscar producto..." class="search-input">
                    <a class="search-icon" href="#"><i class="fa-solid fa-magnifying-glass lupa"></i></a>
                </div>
            </div>
            <div class="nav-item">
            <a href="/signup.html">
            <i id="user-img" class="fa-solid fa-user user"></i>
            </a>   
            <a href="/carrito.html"><i class="fa-solid fa-bag-shopping carrito1"></i></a>
            </div>
        </div>
            <ul class="items-categorias">
                <li class="categorias"><a href="../bolsos.html">Bolsos</a></li>
                <li class="categorias"><a href="../mochilas.html">Mochilas</a></li>
                <li class="categorias"><a href="../hombre.html">Hombre</a></li>
                <li class="categorias"><a href="../accesorios.html">Accesorios</li>
            </ul>
    `
}

createNav();

// const inputSearch = document.querySelector(".search-input");

// function buscador_interno() {
//     filter = inputSearch.value.toUpperCase();
//     li = 
// }