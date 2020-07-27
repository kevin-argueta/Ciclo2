function inicializar(){
    //Inicialización de variables
    var num, abso, redo, arri, abaj, espo, rand, contenido=" ";
    do {
    num = prompt("Ingrese 1 numero de 2 digitos para realizar todas las funciones .Math(): ", "");
    }while(isNaN(num) || num <= 9 || num>=100);
    var datos = document.getElementById('datos');
    abso=Math.abs(num);
    redo=Math.round(num);
    arri=Math.ceil(num);
    abaj=Math.floor(num);
    espo=Math.exp(num);
    rand=Math.random();
    contenido += "<h1>Funciones de Math</h1>\n";
    contenido += "<table>";
    contenido += "<tr>";
    contenido += "<td><h2>Funcion</h2></td>";
    contenido += "<td><h2>Respuesta</h2></td>";
    contenido += "</tr>";
    contenido += "<tr>";
    contenido += "<td>abs()</td>";
    contenido += "<td>"+abso+"</td>";
    contenido += "</tr>";
    contenido += "<tr>";
    contenido += "<td>around()</td>";
    contenido += "<td>"+redo+"</td>";
    contenido += "</tr>";
    contenido += "<tr>";
    contenido += "<td>ceil()</td>";
    contenido += "<td>"+arri+"</td>";
    contenido += "</tr>";
    contenido += "<tr>";
    contenido += "<td>floor()</td>";
    contenido += "<td>"+abaj+"</td>";
    contenido += "</tr>";
    contenido += "<tr>";
    contenido += "<td>exp()</td>";
    contenido += "<td>"+espo+"</td>";
    contenido += "</tr>";
    contenido += "<tr>";
    contenido += "<td>random()</td>";
    contenido += "<td>"+rand+"</td>";
    contenido += "</tr>";
    contenido += "<table>";
    datos.innerHTML = contenido;
   }
   window.onload = inicializar;