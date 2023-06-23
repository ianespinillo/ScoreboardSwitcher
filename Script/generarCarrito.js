const nav = document.querySelector('nav');
console.log(nav);
eventListener();

function eventListener() {}{
    document.addEventListener('DOMContentLoaded', generarCarrito);
}

function generarCarrito(){
    const carritoNew = document.createElement('div')
    carritoNew.classList.add('menu');
    carritoNew.innerHTML = `
    <div class="carrito-logo">
        <img src="../../../Images/Inicio/carrito-de-compras.png" id="carrito">
        <span>0</span>
    </div>

    <table id="carrito-list" class="carrito-list">
        <thead>
            <tr>
                <th>Logo</th>
                <th>League</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody></tbody>
    <!-- <a href="#" class="vaciar-carrito">Delete all</a> -->
    </table>
    `

    nav.append(carritoNew);
}