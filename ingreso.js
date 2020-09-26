//creamos objeto
var ingreso = new Object();
//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var showinfo = document.getElementById("mostrar");
    if(showinfo.addEventListener){
    showinfo.addEventListener("click", function(){
    createObject(document.frmIngreso);
    }, false);
    }
    else if(showinfo.attachEvent){
    showinfo.attachEvent("onclick", function(){
    createObject(document.frmIngreso);
    });
    }
}
