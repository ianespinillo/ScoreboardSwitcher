(function(){
    const carritoImg= document.querySelector('.carrito-logo ');
const carritoPopup= document.querySelector('#myModal');
const carritoTable = document.querySelector('#carritoXL tbody');
let articulos;
document.addEventListener('DOMContentLoaded', () => {
    articulos= JSON.parse(localStorage.getItem('carrito')) || [];
    imprimirCarrito(articulos);
})

carritoImg.addEventListener('click', () => {
    carritoPopup.style.display= 'block';
    imprimirCarrito();
});

function imprimirCarrito(articulos) {
    const {league, price, logo} = articulos;

    articulos.forEach(()=> {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>
        <img src="${logo}" class="logo" style= "width: 80px; height 80px; display: block; margin: auto"/>
        </td>
        <td>
        ${league.textContent}
        </td>
        <td>
        $${price}
        </td>
        `;
        carritoTable.appendChild(fila);
    })
}
})();