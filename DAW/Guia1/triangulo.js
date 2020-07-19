/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
var ver;
var base = prompt('Introduzca la base del triángulo','');
do{
    if (isNaN(base)==1) {
        ver = 0;
        base = prompt('Solo se aceptan numeros xd:','');
    }else{
        ver = 1;
    }    
}while(ver==0);
var altura = prompt('Introduzca la altura del triángulo','');
do{
    if (isNaN(altura)==1) {
        ver = 0;
        altura = prompt('Solo se aceptan numeros xd:','');
    }else{
        ver = 1;
    }    
}while(ver==0);
var area;
area = (base*altura)/2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr/><br /></header>");
