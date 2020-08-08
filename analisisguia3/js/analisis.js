var cifra1, cifra2, operacion;
function respu() {
    //variables
    var respuesta=document.getElementById("respuesta");
    var reset=document.getElementById("reset");
    var multi=document.getElementById("multi");
    var divi=document.getElementById("division");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var raiz=document.getElementById("raiz");
    var residuo=document.getElementById("residuo");
    var igual=document.getElementById("igual");
    var cuadrado=document.getElementById("cuadrado");
    var reversa=document.getElementById("reversa");
    var n0=document.getElementById("n0");
    var n1=document.getElementById("n1");
    var n2=document.getElementById("n2");
    var n3=document.getElementById("n3");
    var n4=document.getElementById("n4");
    var n5=document.getElementById("n5");
    var n6=document.getElementById("n6");
    var n7=document.getElementById("n7");
    var n8=document.getElementById("n8");
    var n9=document.getElementById("n9");
    n0.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"0";
    }
    n1.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"1";
    }
    n2.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"2";
    }
    n3.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"3";
    }
    n4.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"4";
    }
    n5.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"5";
    }
    n6.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"6";
    }
    n7.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"7";
    }
    n8.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"8";
    }
    n9.onclick=function(e) {
        respuesta.textContent=respuesta.textContent+"9";
    }
    reset.onclick=function(e) {
        resetear();
    }
    suma.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="+";
        limpiar();
    }
    resta.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="-";
        limpiar();
    }
    multi.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="*";
        limpiar();
    }
    divi.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="/";
        limpiar();
    }
    residuo.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="%";
        limpiar();
    }
    reversa.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="Rev";
        limpiar();
    }
    cuadrado.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="Cua";
        limpiar();
    }
    raiz.onclick=function (e){
        cifra1=respuesta.textContent;
        operacion="Rai";
        limpiar();
    }
    igual.onclick=function (e){
        cifra2=respuesta.textContent;
        limpiar();
        resolver();
    }
}
function limpiar(){
    respuesta.textContent="";
}
function resetear(){
    respuesta.textContent="";
    operacion="";
    cifra2=0;
    cifra1=0;
}
function resolver() {
    var res=0;
    switch(operacion){
        case "+":            
            res=parseFloat(cifra1)+parseFloat(cifra2);
            break;
        case "-":
            res=parseFloat(cifra1)-parseFloat(cifra2);
            break;
        case "*":
            res=parseFloat(cifra1)*parseFloat(cifra2);
            break;
        case "/":
            if(cifra2!=0){
            res=parseFloat(cifra1)/parseFloat(cifra2);
            }else{
                respuesta.textContent="Math Error";
            }
            break;
        case "%":
            if(cifra2!=0){
                res=parseFloat(cifra1)%parseFloat(cifra2);
                }else{
                    respuesta.textContent="Math Error";
                }
            break;
        case "Rev":
            res=1/parseFloat(cifra1);
            break;
        case "Cua":
            res=Math.pow(parseFloat(cifra1),2);
            break;
        case "Rai":
            res=Math.sqrt(parseFloat(cifra1));
            break;
                    
    }
    resetear();  
    respuesta.textContent=res;
}