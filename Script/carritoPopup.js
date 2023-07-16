(function(){
const carritoImg= document.querySelector('.carrito-logo ');
const carritoPopup= document.querySelector('#myModal');
const carritoTable = document.querySelector('#carritoXL tbody');
const cerrar = document.querySelector('.close')
const totalRow = document.querySelector('#carritoXL tfoot')
const btnVaciar = document.querySelector('#vaciarBtn');
let articulos=[];
let precioTotal=[];


document.addEventListener('DOMContentLoaded', () => {
    articulos= JSON.parse(localStorage.getItem('carrito')) || [];
    precioTotal= JSON.parse(localStorage.getItem('precioTotal')) || [];
    imprimirCarrito();
})
cerrar.addEventListener('click', () => carritoPopup.style.display='none');
carritoImg.addEventListener('click', () => {
    carritoPopup.style.display= 'block';
    imprimirCarrito(); 
});

btnVaciar.addEventListener('click', () => {
    articulos=[];
    precioTotal= 0;
    localStorage.setItem('carrito',JSON.stringify(articulos));
    localStorage.setItem('precioTotal',JSON.stringify(precioTotal));
    carritoTable.innerHTML = '';
    totalRow.textContent = '';
});
function imprimirCarrito() {
    
    articulos.forEach( articulo => {
        const {league, price, logo} = articulo;
        const fila = document.createElement('tr');
        const newRow = document.createElement('tr');

        fila.innerHTML = `
        <td>
        <img src="${logo}" class="logo" style= "width: 80px; height 80px; display: block; margin: auto"/>
        </td>
        <td>
        ${league}
        </td>
        <td>
        $${price}
        </td>
        `;
        carritoTable.appendChild(fila);

        newRow.innerHTML = `
        <td></td>
        <td></td>
        <td>Total: $${precioTotal}</td>
        `
        totalRow.appendChild(newRow);
    })
}

})();