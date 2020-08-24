//Definir la matriz o arreglo con los datos
var lista = new Array(
'Abuhado','Acecinar','Agigolado','Álveo','Arrebol','Bahorrina','Bonhomía','Burdégano',
'Cagaprisas','Celaje','Conflictuar','Depauperar','Desleír','Deyección','Ebúrneo','Entronque',
'Esmegma','Falcado','Farmacopea','Ful','Garambaina','Garlito','Gaznápiro','Haiga',
'Heresiarca','Hermeneuta','Histrión','Idiotismo','Inmarcesible','Isagoge','Jerapellina','Jerigonza',
'Jipiar','Joyel','Lábaro','Lobanillo','Limerencia','Melifluo','Mondo','Nadir',
'Nefando','Nefelibata','Núbil','Ñengo','Ñomblón','Ñuzco','Ochavo','Oleaginoso',
'Orate','Petricor','Plañir','Patibulario','Patochada','Picio','Quincalla','Recipiendario',
'Regodeo','Regnícola','Réprobo','Sabrimiento','Sapenco','Sempiterno','Serendipia','Trapisonda',
'Testaferro','Trémolo','Ubérrimo','Ucronía','Uebos','Unigénito','Vagido','Verbigracia',
'Vituperio','Vulpino','Xerofítico','Xeroftalmia','Xeromicteria','Zaino','Zangolotear','Zonzo',
 );
 var significado = new Array(
 'Dícese de aquellas personas quienes tienen una apariencia que recuerda a la de un búho o ave similar.',
 'Acto de salar las carnes y ponerlas al aire. Acción de convertir un producto cárnico en cecina.',
 'Adjetivo, típico de la provincia de Segovia, que se usa para describir aquel a quien, al realizar algo con un poco de esfuerzo, siente que se ahoga y percibe una presión en el pecho.',
 'La madre de un accidente hidrográfico natural, normalmente un arroyo o río.',
 'Es el efecto de la luz del Sol al proyectarse sobre las nubes matutinas y de la tarde, que les otorga tonalidades rojizas.',
 'Conjunto de muchas cosas asquerosas que se han echado en agua, la cual se ha tornado sucia. También significa conjunto de gente soez y ruin.',
 'Afabilidad, sencillez, bondad y honradez en el carácter.',
 'Híbrido entre un caballo y una asna.',
 'Persona que es impaciente, quien tiene prisa siempre.',
 'Cuando en el cielo se pueden observar nubes de distintas texturas, formando un horizonte colorido en la puesta o salida del sol.',
 'Acto de provocar un conflicto en alguien o en algo. También significa el sufrir un conflicto interno o preocupación que puede hacer que se cambie el comportamiento.',
 'Debilitar, extenuar física o moralmente, ya sea uno mismo o hacia otra persona.',
 'Disolver algo, de contextura sólida o pastosa, en un líquido.',
 'Defecación de los excrementos.',
 'Hecho de marfil o de un material que se le parece.',
 'Relación de parentesco entre personas quienes comparten un tronco del linaje en común.',
 'Secreción de las glándulas prepuciales. Parte del semen más espesa.',
 'Que tiene una curvatura similar a la de una hoz.',
 'Repertorio o libro de recetas medicinales, pudiendo ser éstas tanto fármacos como fitoterapéuticas.',
 'Faso, fallido, que posee poco valor.',
 'Adorno de mal gusto u objetos que son pamplinas. También significa gestos de mal gusto.',
 'Herramienta de pesca la cual consiste en una nasa en cuya parte más estrecha tiene una red con la que atrapar al pez.',
 'Tonto, palurdo, persona quien se emboba con cualquier cosa.',
 'Coche de gran tamaño y ostentoso, como lo es una limusina, un todoterreno de lujo o un bus privado.',
 'Quien promueve una herejía, quien enciende la chispa en un acto contra una religión.',
 'Persona que interpreta textos, normalmente de carácter religioso o ético, para fijar su verdadero sentido.',
 'Actor teatral. También referido para aquellas personas quienes se expresan con la forma característica de una persona quien está sobreactuando.',
 'Giro o expresión lingüística que no se ajusta a las reglas gramaticales.',
 'Dicho de un vegetal que no puede marchitarse.',
 'Introducción, preámbulo.',
 'Vestido viejo y andrajoso, pieza de tela que no puede dar más de sí.',
 'Lenguaje propio de algunos gremios, es decir, vocabulario especializado en un determinado ámbito profesional.',
 'Gemir, hipar, gimotear. También significa cantar con voz semejante a la de un gemido.',
 'Joya pequeña.',
 'Estandarte que era usado por los antiguos romanos. También es el nombre del monograma formado por la cruz y las dos primeras letras del nombre griego de Cristo.',
 'Bulto leñoso que se forma en la corteza de los árboles. También tiene su versión humana, que consiste en un bulto superficial, generalmente no doloroso, que se forma en la cabeza y otras partes del cuerpo.',
 'Locura de amor. Estado mental involuntario en el que la atracción de un persona hacia la otra le impide pensar de forma racional.',
 'Sonido excesivamente dulce, suave o delicado.',
 'Dicho de algo que está limpio y libre de cosas extra, añadidas o superfluas.',
 'Punto de la esfera celeste diametralmente opuesto al cenit.',
 'Algo que causa repugnancia u horror cuando se habla de ella. Algo que es abominable y asqueroso a partes iguales.',
 'Persona soñadora, quien se encuentra en la inopia y se mantiene aislada de lo duro y cruel que es este mundo.',
 'Dicho de una persona, especialmente de una mujer, quien se encuentra en edad de casarse.',
 'Persona enclenque, flaca, desmedrada.',
 'Dicho de una persona muy gorda, con buenas nalgas.',
 'Uno de los nombres con el que se hace referencia al Diablo o príncipe de los ángeles del mal.',
 'Sinónimo de octavo, utilizado para hacer referencia a una octava parte de algo. También se usa para indicar que algo tiene poco valor. En la antigüedad era una moneda española de cobre con peso de un octavo de onza.',
 'Sinónimo de aceitoso, con textura de aceite.',
 'Persona quien no está en plenas facultades psíquicas, quien ha perdido el juicio.',
 'Olor que desprende la tierra cuando ésta ha sido mojada por las gotas de la lluvia.',
 'Gemir y llorar de tal forma que los demás lo escuchan. Sollozar y clamar.',
 'Dicho de alguien o algo que, a causa de su repugnante aspecto, produce un gran espanto y horror.',
 'Disparate, dicho de algo necio, un despropósito.',
 'Dicho de alguien quien ha tenido la mala fortuna de ser excesivamente feo.',
 'Conjunto de objetos metálicos, con poco valor. Pueden ser tijeras, imitaciones de joyas, piezas de coche estropeadas.',
 'Persona quien es recibida solemnemente por la institución quien la recibe.',
 'Deleite ante el percance ajeno, acto de alegrarse por la desgracia ajena.',
 'Habitante natural de un reino. También dicho de quien escribe de las cosas especiales de su patria, como códigos penales, hábitos nacionales, cultura en general.',
 'Condenado a las penas eternas. También dicho de aquel quien es condenado por su heterodoxia religioso.',
 'Palabra antaño utilizada como sinónima de sabor. También se utilizaba para hacer referencia a un chiste o chascarrillo.',
 'Caracol terrestre con rayas pardas transversales común de la Europa más sureña.',
 'Dicho de algo que durará para siempre. Algo que tiene inicio, pero no final.',
 'Hallazgo, que no estaba planificado, que ha resultado ser algo afortunado pese a que se estaba buscando otra cosa.',
 'Riña con voces o acciones. También significa agitación del mar, formada por olas pequeñitas que se cruzan en diversos sentidos.',
 'Persona quien presta su nombre en un contrato que, en realidad, le correspondría firmar a otra persona.',
 'Concepto musical que describe una rápida sucesión de repeticiones de una misma nota.',
 'Dicho de algo que es muy fértil y abundante.',
 'Utopía aplicada a la historia. Reconstrucción contrafáctica de un evento histórico, de una forma en la que al final no fue.',
 'Palabra, ya en desuso, que significa una necesidad o quehacer.',
 'Persona quien es hijo o hija única.',
 'Gemido o llanto de un recién nacido.',
 'Sinónimo de por ejemplo.',
 'Insulto, calumnia o infamia que provoca la acción de haber ofendido a alguien.',
 'Palabra usada para designar a todo aquello que esté relacionado con los zorros.',
 'Dicho sobre aquellos vegetales que están adaptados por su estructura a los medios secos.',
 'Enfermedad de los ojos en la que hay sequedad el el globo ocular y retracción de la conjuntiva, además de opacidad de la córnea.',
 'Sequedad de la mucosa nasal.',
 'Traidor, falso, poco seguro en el trato.',
 'Estar constantemente moviéndose de un lugar a otro sin propósito alguno.',
 'Soso, insulso e insípido. También dicho para referirse a alguien o algo que resulta ser bastante tonto.'
    );
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar(){
    var num;
 //Creando el controlador de evento para el evento
 //doble clic sobre los elementos del cuadro de lista
 var lista = document.getElementById("lstsports");
 //Cargando los datos en el cuadro de lista al cargar la página
 cargarLista();
 if(lista.addEventListener){
 lista.addEventListener("dblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 }, false);
 }
 else if(lista.attachEvent){
 lista.attachEvent("ondblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 });
 }
 //Capturando el campo de texto sobre el que se ingresan los deportes
 //mediante pulsasión de tecla
 var texto = document.getElementById("txtsport");
 if(texto.addEventListener){
 texto.addEventListener("keyup", buscar, false);
 }
 else if(texto.attachEvent){
 texto.attachEvent("onkeyup", buscar);
 }
}
function cargarLista() {
 // Cargamos el combo
 for(x=0;x<lista.length;x++)
 document.frmsearchsport.lstsports[x] = new Option(lista[x]);
}
function cargarTexto(elemento){
 if(elemento!=null && elemento!=undefined && elemento!="")
 document.frmsearchsport.txtsport.value = elemento;
 let pos = lista.indexOf(elemento);
 let vale;
 for(vale=pos; vale<significado.length; vale++){
    document.getElementById("respuesta").innerHTML="Significado: "+significado[vale];
    document.getElementById("respuesta")="Significado: "+significado[vale];
}
}
function buscar() {
 limpiarLista();
 // Se obtiene el valor del texto
 var str = document.frmsearchsport.txtsport.value;
 // Crear la expresión regular
 var expr = new RegExp("^" + str,"i");
 // Recorrer la lista. Si la expresión regular es OK
 y = 0;
 for(x=0;x<lista.length;x++) {
 if(expr.test(lista[x])) {
 document.frmsearchsport.lstsports[y] = new Option(lista[x]);
 y++;
 }
 }
}
function limpiarLista() {
 for(x=document.frmsearchsport.lstsports.length;x>=0;x--)
 document.frmsearchsport.lstsports[x] = null;
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}
