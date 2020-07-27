function inicializar(){
    //Inicialización de variables
    var cifra = new Array();
    var i=0, contenido="", Cant=0, CantPar=0, CantImpar=0, Suma=0, SumaImpar=0, SumaPar=0, Mayor=0, Menor=10;
    var num, j;    
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
    //Lazo que muestra la cantidad de cifras
    do{
       cifra[i]=num%10;
       num = Math.floor(num/10);       
       i=i+1;
       Cant=Cant+1;
    }while(num>10);
    if(num!=0){
    cifra[i]=num;
    Cant++;
    }
    for(j=0;j<=i;j++){ 
       if(cifra[j]%2!=0){
        SumaImpar=SumaImpar+cifra[j];
        CantImpar=CantImpar+1;
       }else{
        SumaPar=SumaPar+cifra[j];
        CantPar=CantPar+1;
       }
       if(Mayor<=cifra[j]){
            Mayor=cifra[j];
       }
       if(Menor>=cifra[j]){
        Menor=cifra[j];
       }
       Suma=Suma+cifra[j];
    }
    contenido += "<h1>cantidad de Cifras</h1>\n";
    contenido += "<h2> En total son "+Cant+" cifras </h2>\n";
    contenido += "<h1>cantidad de Cifras Impares</h1>\n";
    contenido += "<h2> En total son "+CantImpar+" impares </h2>\n";
    contenido += "<h1>cantidad de Cifras Pares</h1>\n";
    contenido += "<h2> En total son "+CantPar+" pares </h2>\n";
    contenido += "<h1>Suma de las Cifras Impares</h1>\n";
    contenido += "<h2> En total son "+SumaImpar+" impares </h2>\n";
    contenido += "<h1>Suma de las Cifras Pares</h1>\n";
    contenido += "<h2> En total son "+SumaPar+" pares </h2>\n";
    contenido += "<h1>Suma de las Cifras</h1>\n";
    contenido += "<h2> En total son "+Suma+"</h2>\n";
    contenido += "<h1>Cifra mayor</h1>\n";
    contenido += "<h2> La cifra mayor es: "+Mayor+"</h2>\n";
    contenido += "<h1>Cifra menor</h1>\n";
    contenido += "<h2> La cifra menor es: "+Menor+"</h2>\n";
    datos.innerHTML = contenido;
   }
   window.onload = inicializar;