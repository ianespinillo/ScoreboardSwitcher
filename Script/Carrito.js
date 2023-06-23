const carrito= document.querySelector('#carrito-list tbody');
const btnVaciar= document.querySelector('#vaciar-carrito');
const producto= document.querySelector('#article');
const vaciarBtn = document.querySelector('.vaciar-carrito');
const carritoLogo= document.querySelector('.carrito-logo');
let articulos=[];



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
    }) 
    aumentarSpan();
    cargarStorage();
}
function limpiarHTML(){

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