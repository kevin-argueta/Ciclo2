function inicializar(){
    //Inicialización de variables
    var numeros = new Array();
    var numero=0, i=0, num=0;
    var tipo, contenido=" ",j;
    do{
    numero=prompt("Ingrese un numero con mas de 2 digitos"," ");
    }while(numero<=99);
    do{
        numeros[i]=numero%10;
        numero = Math.floor(numero/10);       
        i=i+1;
    }while(numero>10);
    if(numero!=0){
        numeros[i]=numero;
    }
    do{
        tipo=prompt("Desea 'añadir' o 'quitar' el primer digito"," ");
    }while((tipo!="añadir")&&(tipo!="quitar"));
    if(tipo=="añadir"){
        num=prompt("Que numero desea añadir: "," ");
        numeros.push(num);
        i++;
    }else{
        numeros.pop();
        i--;
    }
    var datos = document.getElementById('datos');
    contenido += "<h1>La cadena resulatnte es:</h1>\n";
    contenido += "<h2>";
    for(j=i; j>=0; j--){
        contenido += numeros[j];
    }
    contenido += "</h2>";
    datos.innerHTML = contenido;
}
window.onload = inicializar;