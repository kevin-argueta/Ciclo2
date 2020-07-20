/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: grados.js *
* Uso: Calcular grados F° a partir de C°. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var ver;
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
var conversion = document.getElementById('conversion');
var far;
far=(cels * (9/5)) + 32;
conversion.innerHTML="<p>Hola perri</p>";    
if(cels<=-1){
    menu=1;
}else if(cles>=0 && cels<=20){
    menu=2;
}else if(cels>=21 && cels<=40){
    menu=3;
}else{
    menu=4;
}
switch(menu){
    case 1:
        conversion.innerHTML="<p>Hola perri</p>";     
        break;
    }
