/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: grados.js *
* Uso: Calcular grados F° a partir de C°. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var ver;
var cels = prompt('Introdusca la cantidad de grados celsius','');
do{
    if (isNaN(cels)==1) {
        ver = 0;
        cels = prompt('Solo se aceptan numeros :','');
    }else{
        ver = 1;
    }    
}while(ver==0);
var far;

