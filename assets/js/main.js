let checkBox = document.querySelector(".switch input");
let tiempo = document.querySelector(".month");
let precio = document.querySelector(".price .pricefix");
let descuento = document.querySelector(".switch");

// generar descuento 25%
descuento.addEventListener('click', ()=> {

    if (checkBox.checked === true) {
        
        let precioInt = parseInt(precio.textContent);
        precio.textContent = `${(precioInt - (precioInt * .25)) * 12}`;
        tiempo.textContent = "/ Year";

    } else {
        precios();
        tiempo.textContent = "/ Month";
    }
})

// cambiar precios dinamicamente
let pageViews = document.querySelector(".page-views span");
let rango = document.querySelector(".range");
rango.addEventListener('input', precios);

function precios(){

    console.log(typeof rango.value, checkBox.checked)

    switch(rango.value) {

        case "1":   
            if (checkBox.checked){
                precio.textContent = 72;
            } else precio.textContent = 8;
            
            pageViews.textContent = "10k";
        break;

        case "2":
            if (checkBox.checked){
                precio.textContent = 108;
            } else precio.textContent = 12;

            pageViews.textContent = "50k";
        break; 

        case "3": 
            if (checkBox.checked){
                precio.textContent = 144;
            } else precio.textContent = 16;

            pageViews.textContent = "100k";
        break;

        case "4":
            if (checkBox.checked){
                precio.textContent = 216;
            } else precio.textContent = 24;
    
            pageViews.textContent = "500k";
        break;

        case "5":
            if (checkBox.checked == true){
                precio.textContent = 324;
            } else precio.textContent = 36;
    
            pageViews.textContent = "1M";
        break;    
    }
}

let btn = document.querySelector(".button");
btn.addEventListener('click',()=> window.open("https://cnikoc.github.io/Portfolio/"))