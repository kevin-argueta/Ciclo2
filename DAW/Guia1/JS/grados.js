/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: grados.js *
* Uso: Calcular grados F° a partir de C°. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var ver;
var far;
var menu;
var cels = prompt('Introdusca la cantidad de grados celsius','');
do{
    if (isNaN(cels)==1) {
        ver = 0;
        cels = prompt('Solo se aceptan numeros:','');
    }else{
        ver = 1;
    }
}while(ver==0);    
if(cels<0){
    menu=1;
} 
if(cels>-1 && cels<21){
    menu=2;
} 
if(cels>20 && cels<41){
    menu=3;
}
if(cels>40){
    menu=4;
}
far=(cels * (9/5)) + 32;
document.write("<h1>La temperatura es "+far+" °F</h1>");
switch(menu){
    case 1:
        document.write("<img src='../IMG/antartida.jpg' alt='#'>");
        break;
    case 2:
        document.write("<img src='../IMG/canada.jpg' alt='#'>");
        break;
    case 3:
        document.write("<img src='../IMG/selva.jpg' alt='#'>");
        break;
    case 4:
        document.write("<img src='../IMG/descierto.jpg' alt='#'>");
        break;
    }
