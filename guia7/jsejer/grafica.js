document.querySelector(".Agregar").addEventListener("click", agregarparam);
document.querySelector(".Mostrar").addEventListener("click", mostrarparam);
 
var parametros =[];
var valores = [];

function agregarparam(){
    let html = document.querySelector(".containers").innerHTML;
    let newhtml ='<div><input type="text" class="parametro" placeholder="(parametro)"><input type="number" class="valor" placeholder="(valor)"></div>'
    document.querySelector(".containers").innerHTML = html+ newhtml;
}
function mostrarparam(){
    for(var i = document.querySelectorAll('.parametro').length-1;i>=0;i--){
        parametros.push(document.querySelectorAll('.parametro')[i].value)
        valores.push(parseInt(document.querySelectorAll('.valor')[i].value))
    }
    var data = [{
        x: parametros,
        y: valores,
        type: "bar"
    }]
    Plotly.newPlot("grafico",data);
}