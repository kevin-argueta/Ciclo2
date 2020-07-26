function inicializar(){
    //Inicialización de variables
    var i, contenido="", num, Cant, CantPar, CantImpar, Suma, SumaImpar, SumaPar, Mayor, Menor;
    var cifra = new array();
    do {
    num = prompt("Ingrese un numero (valor entero):", "");
    //Verificar que se ingrese un dato numérico
    if(isNaN(num)){
    alert("El valor digitado no es numérico.");
    continue;
    }
    //Verificar que el valor ingresado sea mayor o igual que 0
    if(num < 0){
    alert("El numero debe 0 o superior");
    }
    }while(isNaN(num) || num < 0);
    //Obteniendo el elemento donde se cargará el contenido
    //generado dinámicamente desde JavaScript
    var datos = document.getElementById('datos');
    contenido += "<h1>cantidad de Cifras</h1>\n";
    //Lazo que muestra la cantidad de cifras
    do{

    }while();
    datos.innerHTML = contenido;
   }
   window.onload = inicializar;