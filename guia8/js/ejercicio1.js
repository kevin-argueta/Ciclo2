if (window.addEventListener) {
    window.addEventListener("load", keyHit, false);
}
else if (window.attachEvent) {
    window.attachEvent("load", keyHit);
}
document.onkeydown = keyHit;
var thisPic = 0;
function keyHit(evt){
 var myPix = new Array(
 "../img/img1.jpg",
 "../img/img2.jpg",
 "../img/img3.jpg",
 "../img/img4.png",
 "../img/img5.jpg",
 "../img/img6.jpg",
 "../img/img7.jpg",
 "../img/img8.jpg",
 "../img/img9.jpg",
 "../img/img10.jpg"
);
var siguiente = document.getElementById("B1");
var atras = document.getElementById("B2");
    if(atras.addEventListener){
        atras.addEventListener("click", function(){
        chgSlide(-1);
        return false;
        }, false);
    }
    if(siguiente.addEventListener){
        siguiente.addEventListener("click", function(){
        chgSlide(1);
        return false;
        }, false);
    }
 var imgCt = myPix.length - 1;
 //37 y 39 son los códigos de las teclas que representan
 //la presión de las teclas de cursor izquierda y derecha
 //respectivamente
 var ltArrow = 37;
 var rtArrow = 39;
 //Manejo del objeto para controlar los eventos del teclado
 //de forma uniforme sin importar el navegador
 var thisKey = (evt) ? evt.which : window.event.keyCode;
 if(thisKey == ltArrow){
 chgSlide(-1);
 atr=0;
 }
 else if(thisKey == rtArrow){
 chgSlide(1);
 sig = 0;
 }
 return false;

 function chgSlide(direction){
 thisPic = thisPic + direction;
 if(thisPic > imgCt){
    thisPic = 0;
}
if(thisPic < 0){
thisPic = imgCt;
}
document.getElementById("myPicture").src = myPix[thisPic];
}

}