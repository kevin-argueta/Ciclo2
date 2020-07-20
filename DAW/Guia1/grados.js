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
var far;
far=(cels * (9/5)) + 32;    
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
switch(menu){
    case 1:
        var conversion = document.getElementById('conversion');
        var contenido = "<body>\n";
        contenido += "\t<h1></h1>\n";
        contenido += "<div id='cenver'>";
        contenido += "<p>La conversion a °F es igual a "+far+"</p>";
        contenido += "</div>";
        contenido += "<div class='imag'>";
        contenido += "<img src='IMG/artantida.jpg' alt='#'>";
        contenido += "</div>";
        contenido += "</body>";
        conversion.innerHTML = contenido;
}