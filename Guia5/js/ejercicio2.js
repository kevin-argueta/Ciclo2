//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var btnregistrar = document.getElementById("respuesta");
    if(btnregistrar.addEventListener){
    btnregistrar.addEventListener("click", registro, false);
    }
    else{
    btnregistrar.attachEvent("onclick", registro);
    }
}
function registro(){
var rect = new registrando(document.frmregistro.txtnombre.value,
    document.frmregistro.txtapellidos.value,
    document.frmregistro.txtmail.value,
    document.frmregistro.txtcontra.value,
    document.frmregistro.txtconcontra.value,
    document.frmregistro.txtfechanac.value);
    rect.mostrar(rect.carea(), " área");
return false;
}
//Creando una clase potenciar
function registrando(nombres, apellidos, mail, contra, concontra, fechanac){
//Propiedades de la clase
var tabla="";
var codigo;
this.nombres = nombres;
this.apellidos = apellidos;
this.mail = mail;
this.contra = contra;
this.concontra = concontra;
this.fechanac = fechanac;
var letra1="";
var letra2="";
var contador;
var fecha = new Date();
var year= fecha.getFullYear();
var numale = Math.floor(Math.random()*(9999-1000+1))+1000;
if(/^[A-Z ]+$/i.test(nombres)==true || /^(?:[-A-Z]+ )+[-A-Z]+$/i.test(nombres)==true){
    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail)){    
        if((contra.length>7)&&(contra==concontra)){   
            if(/^(?:[-A-Z]+ )+[-A-Z]+$/i.test(apellidos)==true){
                letra1=apellidos.substr(0,1);
                letra1=letra1.toUpperCase();
                contador=apellidos.indexOf(" ",0);
                letra2=apellidos.substr((contador+1),1);
                letra2=letra2.toUpperCase();
                codigo= letra1 +""+ letra2 +""+ year +""+ numale + "";
            tabla+="<table>";
            tabla+="<thead>\n\t<tr>\n\t\t";
            tabla+="<th>codigo</th>\n\t\t";
            tabla+="<th>nombre</th>\n\t\t";
            tabla+="<th>apellido</th>\n\t\t";
            tabla+="<th>email</th>\n\t\t";
            tabla+="<th>Fecha nacimiento</th>\n\t\t";
            tabla+="<tbody>\n\t";
            tabla+="<tr>\n\t\t";
            tabla+="<td>" + codigo + "</td>\n\t\t";
            tabla+="<td>" + nombres + "</td>\n\t\t";
            tabla+="<td>" + apellidos + "</td>\n\t\t";
            tabla+="<td>" + mail + "</td>\n\t\t";
            tabla+="<td>" + fechanac + "</td>\n\t\t";
            tabla+="</tr></tbody>\n";
            tabla+="</table>\n";
            mostrar.innerHTML = tabla;
            }else if(/^[A-Z ]+$/i.test(apellidos)==true){
                letra1=apellidos.substr(0,1);
                letra1=letra1.toUpperCase();
                letra2=apellidos.substr(0,1);
                letra2=letra2.toUpperCase();
                codigo= letra1 +""+ letra2 +""+ year +""+ numale + "";
            tabla+="<table>";
            tabla+="<thead>\n\t<tr>\n\t\t";
            tabla+="<th>codigo</th>\n\t\t";
            tabla+="<th>nombre</th>\n\t\t";
            tabla+="<th>apellido</th>\n\t\t";
            tabla+="<th>email</th>\n\t\t";
            tabla+="<th>Fecha nacimiento</th>\n\t\t";
            tabla+="<tbody>\n\t";
            tabla+="<tr>\n\t\t";
            tabla+="<td>" + codigo + "</td>\n\t\t";
            tabla+="<td>" + nombres + "</td>\n\t\t";
            tabla+="<td>" + apellidos + "</td>\n\t\t";
            tabla+="<td>" + mail + "</td>\n\t\t";
            tabla+="<td>" + fechanac + "</td>\n\t\t";
            tabla+="</tr></tbody>\n";
            tabla+="</table>\n";
            mostrar.innerHTML = tabla;
            }else{
                alert("Apellido no valido");
            }
        }else{
            alert("Contraseñas no coinciden o no superaron los 8 digitos");
        }
    }else{
        alert("Email no valido");
    }
}else{
    alert("Nombre no valido");
}
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}