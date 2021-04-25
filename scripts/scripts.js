/////////////////////LOADER//////////////////////////
window.addEventListener("load", function(){
    
    document.getElementById("contenedor-loader").classList.toggle("cerrar-loader");
})


//////////////////MENU RESPONSIVO////////////////////
//obtengo los elementos por class y ID
const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");

let abierto = false;

//funcion para cabiarle la clase a los enlaces
const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    
}

//llamo  a la funcion con un event listener
hamburguesa.addEventListener("click", function(){
    toggleMenu();
    //saber si el menu esta abierto-cuando tiene las dos clases
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})

//creo funcion para que el menu cierre al hacer click en otra zona de la pantalla 
window.addEventListener("click", function(e){
    
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false;
        }
    }
})


//*************************************************************//
///////////////////ANIMACION DE NAVEGACION/////////////////////

window.addEventListener("scroll", function(){
    progreso();
    menu();
})

function progreso(){
    let scroll = document.documentElement.scrollTop;
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progreso = (scroll/alto)*100;
    document.getElementsByClassName("barra")[0].style.width = progreso + "%";
}


let ubicacionPrincipal = window.pageYOffset;
function menu(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementById("navegacion").style.height = '70px';
    }else{
        document.getElementById("navegacion").style.height = '40px';
    }
    ubicacionPrincipal = desplazamientoActual;
}


/////////////////////LOADER//////////////////////////

