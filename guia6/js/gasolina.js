var tipo=0;
function calcular(){
    var res=0;
    var cantidad = document.getElementById("cantidad").value;
    var respuesta = document.getElementById("respuesta");
    var contenido = "";
    res= tipo*cantidad;
    contenido += "<p> Total:</p>";
    contenido += "<p> $"+(Math.round(res*100)/100)+"</p>";
    respuesta.innerHTML=contenido;
}
function especial(){
    tipo=4.27;
}
function normal(){
    tipo= 4.05;
}
function diesel(){
    tipo= 3.96;
}