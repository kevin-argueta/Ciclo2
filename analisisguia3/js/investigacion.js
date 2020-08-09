function respu() {
    var Ejer=document.getElementById("Ejer");
    Ejer.onclick=function(e) {
        var numero1=prompt("Que primer numero que desea multiplicar: ", "");
        var multi=Cua(numero1);
        var numero2=prompt("Con que numero lo desea multiplicar: ", "");        
        alert("El resultado es: "+ multi(numero2));

    }
}
//ejemplo 1
/*function GenCla() {
    let variable=1;
    return function dentro(cant) {
        console.log('La cantidad es', cant,
        'y es la ', variable,' que se llama');
        variable++;
    }
}
let dentro= GenCla();
dentro('primera');
dentro('segunda');
//ejemplo 2
function suma() {
    var numero=3;
    function num() {
        console.log(num);
    }
    numero++;
    return numero;
}
var realizar=suma();
suma();
//ejemplo 3
function nuevo(nombre) {
    function bienvenido() {
        alert("Bienvenido. A esta pagina web" + nombre);
    }
    return{
        get nombre(){
            return nombre;
        },
        bienvenido();
    };
}
var usuario = nuevo('Kevin');
usiario.bienvenido();*/
//funcional
function Cua(a) {
    return function(b) {
        return a * b;
    };
}