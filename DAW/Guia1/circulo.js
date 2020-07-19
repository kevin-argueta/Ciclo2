/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: circulo.js *
* Uso: Calcular el área de un círculo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
var ver;
const PI = 3.1415926535;
var radio = prompt('Introduzca el radio del círculo:','');
do{
    if (isNaN(radio)==1) {
        ver = 0;
        radio = prompt('Solo se aceptan numeros:','');
    }else{
        ver = 1;
    }    
}while(ver==0);
var area;
area = PI*radio*radio;
document.write("<header><h1>El área del círculo es: " + area + "</h1><hr/><br /></header>");