const vista = document.querySelector(".vista-productos-flex");
let imgs = [
    {
        id: 1,
        img: "img/producto.jpg",
        nombre: "silla",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 2,
        img: "img/producto2.jpg",
        nombre: "silla2",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 3,
        img: "img/producto3.jpg",
        nombre: "silla3",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 4,
        img: "img/producto4.jpg",
        nombre: "silla4",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 5,
        img: "img/producto5.jpg",
        nombre: "silla5",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 6,
        img: "img/producto6.jpg",
        nombre: "silla6",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 7,
        img: "img/producto7.jpg",
        nombre: "silla7",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 8,
        img: "img/producto8.jpg",
        nombre: "silla8",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 9,
        img: "img/producto9.jpg",
        nombre: "silla9",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 10,
        img: "img/producto10.jpg",
        nombre: "silla10",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 11,
        img: "img/producto11.jpg",
        nombre: "silla11",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 12,
        img: "img/producto12.jpg",
        nombre: "silla12",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 13,
        img: "img/producto13.jpg",
        nombre: "silla13",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 14,
        img: "img/producto14.jpg",
        nombre: "silla14",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 15,
        img: "img/producto15.jpg",
        nombre: "silla15",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 16,
        img: "img/producto16.jpg",
        nombre: "silla16",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 17,
        img: "img/producto17.jpg",
        nombre: "silla17",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 18,
        img: "img/producto18.jpg",
        nombre: "silla18",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 19,
        img: "img/producto19.jpg",
        nombre: "silla19",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
    {
        id: 20,
        img: "img/producto20.jpg",
        nombre: "silla20",
        precio: "750bs",
        img2: "img/producto11.jpg",
        img3: "img/producto19.jpg",
    },
];

let queryString = new URLSearchParams(window.location.search);
let obtener = queryString.get("polera");
let valor = obtener - 1;

let imgMostrable = imgs[valor].img;
let imgMostrable2 = imgs[valor].img2;
let imgMostrable3 = imgs[valor].img3;




let vistaProducto = `
                <div class="vista-producto-img">
                    <div class="producto-img-principal">
                        <img src=${imgMostrable}  alt="" class="img-producto-principal">
                    </div>
                    <div class="producto-img-secundario">
                        <img src=${imgMostrable2} alt="" class="img-secundario" id="img1" />
                        <img src=${imgMostrable3} alt="" class="img-secundario" id="img2" />
                    </div>
                </div>
                <div class="vista-producto-cantidad-nombre">
                    <div class="vista-producto-nombre">
                        <span class="producto-nombre-span">${imgs[valor].nombre}</span>
                    </div>
                    <div class="caja-vista-producto-precio">
                        <span class="vista-producto-precio">${imgs[valor].precio}</span>
                    </div>
                    <span class="producto-talla-texto">Talla:</span>
                    <select name="seleccionar-talla" id="" class="producto-talla">
                        <option value="Chica">Chica</option>
                        <option value="Media">Media</option>
                        <option value="Grande">Grande</option>
                        <option value="ExtraGrande">ExtraGrande</option>
                        <option value="EEG">EEG</option>
                    </select>
                    <div class="vista-producto-cantidad">
                        <input type="number" class="producto-bt-cantidad" readonly value="1">
                        <div class="producto-bt-cantidad-mas">+</div>
                        <div class="producto-bt-cantidad-mas menos">-</div>
                        <div class="bt-agregar-carrito">AÑADIR AL CARRITO</div>
                    </div>
                </div>
`;

vista.innerHTML += vistaProducto;

const inputCantidad = document.querySelector(".producto-bt-cantidad");
const sumar = document.querySelector(".producto-bt-cantidad-mas");
const menos = document.querySelector(".menos");


sumar.addEventListener("click", ()=>{
    if(inputCantidad.value >= 5) inputCantidad.value = 5;
    else inputCantidad.value++;
});
menos.addEventListener("click", ()=>{
    if(inputCantidad.value <= 1) inputCantidad.value = 1;
    else inputCantidad.value--;
});

const imgPrimaria = document.querySelector(".img-producto-principal");
const imgSecundaria = document.querySelectorAll(".img-secundario");

imgSecundaria[0].addEventListener("click", ()=>{
    imgPrimaria.src = imgMostrable2;
});
imgSecundaria[1].addEventListener("click", ()=>{
    imgPrimaria.src = imgMostrable3;
});

