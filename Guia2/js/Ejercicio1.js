function inicializar(){
    alert("aver");
    //Inicialización de variables
    var cifra = new array();
    var i=0, contenido="", Cant=0, CantPar=0, CantImpar=0, Suma=0, SumaImpar=0, SumaPar=0, Mayor=0, Menor=10;
    var num;
    num = prompt("Ingrese un numero (valor entero):", "");
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
       cifra[i]=num%10;
       num=num/10;
       i++;
       cant++;
    }while(num<10);
    if(num!=0){
    cifra[i]=num;
    cant++;
    }
    contenido += "<h2>"+cant+"</h2>\n";
    datos.innerHTML = contenido;
   }
   window.onload = inicializar;