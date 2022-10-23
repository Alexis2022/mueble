const inputValor = document.querySelector(".bt-cantidad");
const masBt = document.querySelector(".bt-mas");
const menosBt = document.querySelector(".bt-menos");
const iconCantidad = document.querySelectorAll(".numero-compra-carrito");
const ActualizarCompra = document.querySelector(".actualizar-compra");

const muestraProducto = document.querySelector(".carrito-productos");
const sinProducto = document.querySelector(".carrito-sin-productos");
const btEliminar = document.querySelector(".eliminar-producto");

let valorIconR = iconCantidad[0].innerHTML;
let valorIcon = iconCantidad[1].innerHTML;

masBt.addEventListener("click", ()=>{
    if(inputValor.value >= 10) inputValor.value = 10;
    else inputValor.value++;
});
menosBt.addEventListener("click", ()=>{
    if(inputValor.value <= 1) inputValor.value = 1;
    else inputValor.value--;
});


btEliminar.addEventListener("click", ()=>{
    muestraProducto.style.display = "none";
    sinProducto.style.display = "block"
});


ActualizarCompra.addEventListener("click", ()=>{
    iconCantidad[0].innerHTML = inputValor.value;
    iconCantidad[1].innerHTML = Number(valorIcon) + Number(inputValor.value);
});

