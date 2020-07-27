function inicializar(){
    //Inicialización de variables
    var valor = new Array();
    var nombre = new Array();
    var i=0, j, contenido="", repe;
    var total = 0;    
    do {
    repe = prompt("¿Desea ingresar un producto?: (1.Si - 2.No)", "");
    if(repe==1){
        do{
            nombre[i]=prompt("Nombre del producto: ", "");            
        }while(nombre[i]=="");
        do{
            valor[i]=prompt("Valor del producto: $", "");
        }while(isNaN(valor[i])||valor[i]<=0);
        i=i+1;
    }
    }while(isNaN(repe) || repe == 1);
    var datos = document.getElementById('datos');
    contenido += "<h1>Articulos del vendedor</h1>\n";
    contenido += "<table>";
    contenido += "<tr>";
    contenido += "<td><h2>Nombre Articulo</h2></td>";
    contenido += "<td><h2>Precio Articulo</h2></td>";
    contenido += "</tr>";
    for(j=0; j<=(i-1); j++){
    contenido += "<tr>";
    contenido += "<td>"+nombre[j]+"</td>";
    contenido += "<td>"+valor[j]+"</td>";
    contenido += "</tr>";
    total=1*total+valor[j]/1;
    }
    contenido += "<tr>";
    contenido += "<td>Vendido por dia</td>";
    contenido += "<td>$ "+total+" </td>";
    contenido += "</tr>";
    contenido += "<table>";
    datos.innerHTML = contenido;
   }
   window.onload = inicializar;