const carrito= document.querySelector('#carrito-list tbody');
const btnVaciar= document.querySelector('#vaciar-carrito');
const producto= document.querySelector('#article');
const vaciarBtn = document.querySelector('.vaciar-carrito');
const carritoLogo= document.querySelector('.carrito-logo');
const rowTotal= document.querySelector('#carrito-list tfoot');
const header = document.querySelector('head')
let articulos=[];
let precioFinal = 0;



cargarEventListener();
function cargarEventListener(){
    document.addEventListener('DOMContentLoaded',() => {
        articulos= JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
        
    });
    producto.addEventListener('click', agregarProducto);
}

function agregarProducto(e){
    if(e.target.classList.contains('btnAdd')){
        const productoSeleccionado= e.target.parentElement.parentElement;
        
        leerProducto(productoSeleccionado);
    }
}

function leerProducto(producto){
    const productoSeleccion={
        logo: producto.querySelector('.competencia').src,
        league: producto.querySelector('.Titulo h1').textContent,
        price: producto.querySelector('.precio span').textContent,
    }
    console.log(productoSeleccion);
    const precio = Number(productoSeleccion.price);
    precioFinal += precio;
    articulos = [...articulos, productoSeleccion];
    carritoHTML();
}

function carritoHTML () {
    
    limpiarHTML();
    articulos.forEach( producto => {
        const { league, price, logo } = producto
        const fila= document.createElement('tr');
        fila.innerHTML= `
        <td>
        <img src="${logo}" class="logo" style= "width: 80px; height 80px; display: block; margin: auto"/>
        </td>
        <td>
        ${league}
        </td>
        <td>
        ${price}
        </td>
        `
        
        carrito.appendChild(fila);
    });
    const newRow= document.createElement('tr');
    newRow.innerHTML = `
    <td></td>
    <td></td>
    <td>Total: $${precioFinal}</td>
    `
    rowTotal.appendChild(newRow);
    
    aumentarSpan();
    cargarStorage();
}
function limpiarHTML(){
    while(rowTotal.firstChild){
        rowTotal.removeChild(rowTotal.firstChild);
    }
    while(carrito.firstChild){
        carrito.removeChild(carrito.firstChild);
    }

}

/* vaciarBtn.addEventListener('click', borrarTodo); */

function borrarTodo(){
    articulos=[];
    carritoHTML();
}
function cargarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulos));
}
function aumentarSpan(){
    let cantidad = 0;
    for(let i=0; i<articulos.length; i++){
            cantidad ++;
        const divCarrito = document.querySelector('.carrito-logo span');
        divCarrito.value= cantidad;
        divCarrito.textContent= cantidad;
        
    };
}
