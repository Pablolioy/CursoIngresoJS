/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo,ancho,radio

function Rectangulo () 
{
    var alambre
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    alambre=((largo*2)+(ancho*2))*3;
    alert("Alambre a comprar: "+alambre+"m");
   // radio=parseInt(document.getElementById("Radio").value);
}
function Circulo () 
{
	var alambre
    radio=parseInt(document.getElementById("Radio").value);
    alambre=parseInt((radio*2*Math.PI)*3);
    console.log(radio);
    console.log(alambre);
    alert("Alambre a comprar: "+alambre+"m");
}
function Materiales () 
{
	var alambre
    var sup
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    sup=largo*ancho;
    alert("Bolsas de cemento a comprar: " +sup*2 + " y " +sup*3 + " bolsas de cal");
}