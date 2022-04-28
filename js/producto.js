const productoDOM = document.querySelector(".pro");
const carritoDOM = document.querySelector(".icon-carrito");

class Productos {
    async getProductos() {
        try {
            const result = await fetch("catalogo.json")
            const data = await result.json()
            const productos = data.items
            return productos
        }catch(err){
            console.log(err)
        }
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const productosLista = new Productos();


    const productos = await productosLista.getProductos()
    console.log(productos)
    
})