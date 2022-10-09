/*function saludo(nombre){


    console.log(`Hola ${nombre}, Buenos dias`);
}


let temporizadorId = setTimeout(saludo, 2000, "Diego"); 

//cancela el timeout
clearTimeout(temporizadorId);

// setInterval - ejecuta una funcion CADA Cierto tiempo
let numero = 5;

function conteo(){
    console.log(`Lanzamiento en ${numero}`);
    numero--;
    if(numero==0){
        clearInterval(lanzamiento)
    }
}
let lanzamiento = setInterval(() =>{
    console.log(`Lanzamiento en ${numero}`);
    numero--;
    if(numero==0){
        clearInterval(lanzamiento)
    } 
}, 1000);


//settimeout anidado

let numero1 = 0;



let incrementoID = setTimeout(function incremento(){
    console.log(numero1);
    numero1++;
    incrementoID = setTimeout(incremento,1000);
},1000);*/


let mostrarFecha = document.getElementById("fecha");

let mostrarReloj = document.getElementById("reloj");

let fecha = new Date();

let diaSemana = ["Domingo","Lunes", "Martes","Miercoles","Jueves","Sabado"];

let mesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"
,"Dieciembre"];

//fecha
mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()}
 De ${mesAnio[fecha.getMonth()]} De ${fecha.getFullYear()}`;

//hora
setInterval(() => {
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
},1000);


