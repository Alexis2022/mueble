const caja = document.querySelector(".caja-producto-destacado-flex");
const bt_d = document.querySelector(".bt-siguiente");
const bt_i = document.querySelector(".bt-anterior");


let imgs = [
    {
        id: 1,
        img: "img/producto.jpg",
        nombre: "mesa",
        precio: "750bs"
    },
    {
        id: 2,
        img: "img/producto2.jpg",
        nombre: "mesa2",
        precio: "750bs"
    },
    {
        id: 3,
        img: "img/producto3.jpg",
        nombre: "mesa3",
        precio: "750bs"
    },
    {
        id: 4,
        img: "img/producto4.jpg",
        nombre: "mesa4",
        precio: "750bs"
    },
    {
        id: 5,
        img: "img/producto5.jpg",
        nombre: "mesa5",
        precio: "750bs"
    },
    {
        id: 6,
        img: "img/producto6.jpg",
        nombre: "mesa6",
        precio: "750bs"
    },
    {
        id: 7,
        img: "img/producto7.jpg",
        nombre: "mesa7",
        precio: "750bs"
    },
    {
        id: 8,
        img: "img/producto8.jpg",
        nombre: "mesa8",
        precio: "750bs"
    },
    {
        id: 9,
        img: "img/producto9.jpg",
        nombre: "mesa9",
        precio: "750bs"
    },
    {
        id: 10,
        img: "img/producto10.jpg",
        nombre: "mesa10",
        precio: "750bs"
    },
    {
        id: 11,
        img: "img/producto11.jpg",
        nombre: "mesa11",
        precio: "750bs"
    },
    {
        id: 12,
        img: "img/producto12.jpg",
        nombre: "mesa12",
        precio: "750bs"
    },
    {
        id: 13,
        img: "img/producto13.jpg",
        nombre: "mesa13",
        precio: "750bs"
    },
    {
        id: 14,
        img: "img/producto14.jpg",
        nombre: "mesa14",
        precio: "750bs"
    },
    {
        id: 15,
        img: "img/producto15.jpg",
        nombre: "mesa15",
        precio: "750bs"
    },
    {
        id: 16,
        img: "img/producto16.jpg",
        nombre: "mesa16",
        precio: "750bs"
    },
    {
        id: 17,
        img: "img/producto17.jpg",
        nombre: "mesa17",
        precio: "750bs"
    },
    {
        id: 18,
        img: "img/producto18.jpg",
        nombre: "mesa18",
        precio: "750bs"
    },
    {
        id: 19,
        img: "img/producto19.jpg",
        nombre: "mesa19",
        precio: "750bs"
    },
    {
        id: 20,
        img: "img/producto20.jpg",
        nombre: "mesa20",
        precio: "750bs"
    },
];

let current_page = 1;
let rows = 20;

function DisplayList(items, war , rows_per_page, page){
    war.innerHTML += "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginationItems = items.slice(start, end);
    for(let i = 0; i < paginationItems.length ; i++){
        let item = paginationItems[i];
        let newHTMLCode = `
            <div class="caja-producto-destacado">
                <div class="producto-destacado">
                    <a href="vista-producto.html?polera=${item.id}" class="producto-destacado-a" id="producto${item.id}">
                    <img src=${item.img} alt="" class="img-destacado">
                    </a>
                    <a href="#"><span class="detacado-nombre">${item.nombre}</span></a>
                    <span class="destacado-precio">${item.precio}</span>
                </div>
            </div>
        `;
        war.innerHTML += newHTMLCode;
    }
}


function Siguiente(page, next, prev, rows_page){
    prev.style.display = "none";
    let cantidad = Math.ceil(imgs.length / rows_page);
    if(page === cantidad) next.style.display = "none";
    next.addEventListener("click", ()=>{
        if(page < cantidad){
            page++;
            prev.style.display = "inline-block";
            DisplayList(imgs, caja, rows, page);
            if(page === cantidad){
                next.style.display = "none";
            }
        }
    })
    prev.addEventListener("click", ()=>{
        if(page >= 2){
            page--;
            next.style.display = "inline-block";
            DisplayList(imgs, caja, rows, page);
            if(page === 1){
                prev.style.display = "none";
                next.style.display = "inline-block";
            }
        }
    })
}

DisplayList(imgs, caja ,rows, current_page);
Siguiente(current_page, bt_d, bt_i, rows);