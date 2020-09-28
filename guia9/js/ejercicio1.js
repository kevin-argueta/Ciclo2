function init(){
    function ajaxRequest(){
        //Crear array() con cadenas para creación de objeto ActiveX
        //en caso de navegadores antiguos de Internet Explorer
        var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; 
        //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
        if(window.ActiveXObject){ 
            for(var i=0; i<activexmodes.length; i++){
                try{
                    return new ActiveXObject(activexmodes[i]);
                }
                catch(e){
                    return false;
                }
            }
        }
        // Si se está usando Chrome, Mozilla, Safari, Opera, etc.
        else if (window.XMLHttpRequest){ 
            return new XMLHttpRequest();
        }
        else{
            return false;
        }
    }
    var request = new ajaxRequest();
    var eleccion1= document.getElementById("img1");
    var eleccion2= document.getElementById("img2");
    var eleccion3= document.getElementById("img3");
    var eleccion4= document.getElementById("img4");
    var eleccion5= document.getElementById("img5");
    var eleccion6= document.getElementById("img6");
    request.onreadystatechange = function(){
        if(request.readyState==4){
            if(request.status==200 || window.location.href.indexOf("http")==-1){
            //Recibir resultado como un objeto de JavaScript usando la función eval()
            //var jsondata = eval("("+request.responseText+")");
            //Recibir resultado como un objeto de JavaScript usando el método parse()
                if(eleccion1.addEventListener){
                    eleccion1.addEventListener("click", function () {
                        var jsondata = JSON.parse(request.responseText);
                        var rssentries = jsondata.items;
                        var output = "<ul>";
                            var i=0;
                            output += "<li>";
                            output += "<h3>" + rssentries[i].title1 + "</h3>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].protagonista1 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].descripcion1 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].director1 + "</p>";
                            output += "</a>";
                            output += "</li>";
                        output += "</ul>";
                        document.getElementById("mostrar").innerHTML = output
                        return false;
                    }, false);
                }
                if(eleccion2.addEventListener){
                    eleccion2.addEventListener("click", function () {
                        var jsondata = JSON.parse(request.responseText);
                        var rssentries = jsondata.items;
                        var output = "<ul>";
                            var i=1;
                            output += "<li>";
                            output += "<h3>" + rssentries[i].title2 + "</h3>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].protagonista2 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].descripcion2 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].director2 + "</p>";
                            output += "</a>";
                            output += "</li>";
                        output += "</ul>";
                        document.getElementById("mostrar").innerHTML = output
                        return false;
                    }, false);
                }
                if(eleccion3.addEventListener){
                    eleccion3.addEventListener("click", function () {
                        var jsondata = JSON.parse(request.responseText);
                        var rssentries = jsondata.items;
                        var output = "<ul>";
                            var i=2;
                            output += "<li>";
                            output += "<h3>" + rssentries[i].title3 + "</h3>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].protagonista3 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].descripcion3 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].director3 + "</p>";
                            output += "</a>";
                            output += "</li>";
                        output += "</ul>";
                        document.getElementById("mostrar").innerHTML = output
                        return false;
                    }, false);
                }
                if(eleccion4.addEventListener){
                    eleccion4.addEventListener("click", function () {
                        var jsondata = JSON.parse(request.responseText);
                        var rssentries = jsondata.items;
                        var output = "<ul>";
                            var i=3;
                            output += "<li>";
                            output += "<h3>" + rssentries[i].title4 + "</h3>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].protagonista4 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].descripcion4 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].director4 + "</p>";
                            output += "</a>";
                            output += "</li>";
                        output += "</ul>";
                        document.getElementById("mostrar").innerHTML = output
                        return false;
                    }, false);
                }
                if(eleccion5.addEventListener){
                    eleccion5.addEventListener("click", function () {
                        var jsondata = JSON.parse(request.responseText);
                        var rssentries = jsondata.items;
                        var output = "<ul>";
                            var i=4;
                            output += "<li>";
                            output += "<h3>"+ rssentries[i].title5 + "</h3>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].protagonista5 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].descripcion5 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].director5 + "</p>";
                            output += "</a>";
                            output += "</li>";
                        output += "</ul>";
                        document.getElementById("mostrar").innerHTML = output
                        return false;
                    }, false);
                }
                if(eleccion6.addEventListener){
                    eleccion6.addEventListener("click", function () {
                        var jsondata = JSON.parse(request.responseText);
                        var rssentries = jsondata.items;
                        var output = "<ul>";
                            var i=5;
                            output += "<li>";
                            output += "<h3>" + rssentries[i].title6 + "</h3>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].protagonista6 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].descripcion6 + "</p>";
                            output += "<br>";
                            output += "<p>" + rssentries[i].director6 + "</p>";
                            output += "</a>";
                            output += "</li>";
                        output += "</ul>";
                        document.getElementById("mostrar").innerHTML = output
                        return false;
                    }, false);
                }
    
            }
            else{
                alert("Ha ocurrido un error mientras se realizaba la petición");
            }
        }
    }
    request.open("GET", "../json/ejercicio1.json", true);
    request.send(null);
    }
    if (window.addEventListener) {
        window.addEventListener("load", init, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("load", init);
    }