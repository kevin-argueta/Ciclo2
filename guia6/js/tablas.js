var fila = null;
var columna = null;
function crear(){
    var contenido="";
    var i=0;
    var j=0;
    fila = document.getElementById("cant_fila").value;
    columna = document.getElementById("cant_columna").value;
    var tabla = document.getElementById("mitabla");
    contenido+="<table >";
    for(j=0;j< fila; j++){
        contenido+="<tr>";
        for(i=0; i<columna; i++){
            contenido+="<td id='td"+j+""+i+"'> null </td>";
        }    
        contenido+="</tr>";
    }
    contenido+="</table>";
    tabla.innerHTML= contenido;
}
function editar(){
    var contenido="";
    var id="";
    var Nfila = document.getElementById("num_fila").value;
    var Ncolumna = document.getElementById("num_columna").value;
    var valor = document.getElementById("dato").value;
    id="td"+(Nfila-1)+""+(Ncolumna-1);
    var numero = document.getElementById(id);
    contenido+=""+valor;
    numero.innerHTML=contenido;
}