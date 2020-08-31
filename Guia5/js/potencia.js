//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var btnpotencia = document.getElementById("respuesta");
    if(btnpotencia.addEventListener){
    btnpotencia.addEventListener("click", calcularpotencia, false);
    }
    else{
    btnpotencia.attachEvent("onclick", calcularpotencia);
     }
}
function calcularpotencia(){
var rect = new potenciar(document.frmpotencia.txtbase.value,
document.frmpotencia.txtpotencia.value);
rect.mostrar(rect.carea(), " área");
return false;
}
//Creando una clase potenciar
function potenciar(base, potencia){
//Propiedades de la clase
this.base = parseFloat(base);
this.potencia = parseFloat(potencia);
let calcupote;
calcupote=Math.pow(this.base,this.potencia);
var mostrar = document.getElementById("mostrar");
let mostrartxt="";
mostrartxt+="<div>";
mostrartxt+="<h1>Respuesta:</h1>";
mostrartxt+="<p>La potencia es igual a "+calcupote+"</p>";
mostrartxt+="</div>";
mostrar.innerHTML = mostrartxt;
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}
