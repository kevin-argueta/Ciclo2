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
if(cels<=-1){
    menu=1;
}else if(cles>=0 && cels<=20){
    menu=2;
}else if(cels>=21 && cels<=40){
    menu=3;
}else{
    menu=4;
}
far=(cels * (9/5)) + 32;
switch(menu){
    case 1:
        document.write("<h1>La temperatura es"+far+" °F</h1>");
        document.write("<img src='IMG/antartida.jpg' alt='#'>");
        break;
    }
