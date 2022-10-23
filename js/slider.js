const slider = document.querySelector(".caja-slider");
let imgSlider = document.querySelectorAll(".slider");
let imgSliderLast = imgSlider[imgSlider.length - 1];


const btDerecha = document.querySelector(".derecho");
const btIzquierda = document.querySelector(".izquierdo");


slider.insertAdjacentElement("afterbegin", imgSliderLast);

function Next(){
    let imgSliderFirst = document.querySelectorAll(".slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", imgSliderFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function Prev(){
    let imgSlider = document.querySelectorAll(".slider");
    let imgSliderLast = imgSlider[imgSlider.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", imgSliderLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}
btDerecha.addEventListener("click", ()=>{
    Next();
});
btIzquierda.addEventListener("click", ()=>Prev());

setInterval(()=>{
    Next();
}, 5000);