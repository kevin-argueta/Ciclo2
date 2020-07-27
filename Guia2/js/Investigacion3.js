function inicializar(){
    //Inicialización de variables
    var numeros = new Array();
    var reves = new Array();
    var contenido=" ", i;
    var numero;
    numero=prompt("Ingrese un numero para invertir"," ");
    for(i=(numero.length-1);i>=0;i--){
        if(numero>9){
        numeros[i]=numero%10;
        numero = Math.floor(numero/10);
        }
        if(numero!=0 && numero>=1 && numero<=9){
            numeros[i]=numero;
        }
    }
    reves= numeros.reverse();
    var datos = document.getElementById('datos');
    contenido += "<h1>La cadena resulatnte es:</h1>\n";
    contenido += "<h2>"+numeros+"</h2>";
    datos.innerHTML = contenido;
}
window.onload = inicializar;