/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var p1;
    var p2;
    var p3;
function Sumar()
{
    var suma
    p1=parseInt(document.getElementById("PrecioUno").value);
    p2=parseInt(document.getElementById("PrecioDos").value);
    p3=parseInt(document.getElementById("PrecioTres").value);
    console.log(p1);
    console.log(p2);
    console.log(p3);
    suma=p1+p2+p3;
    alert(suma);
}
function Promedio () 
{
	var prom
    p1=parseInt(document.getElementById("PrecioUno").value);
    p2=parseInt(document.getElementById("PrecioDos").value);
    p3=parseInt(document.getElementById("PrecioTres").value);
    console.log(p1);
    console.log(p2);
    console.log(p3);
    prom=(p1+p2+p3)/3;
    alert(prom);
}
function PrecioFinal () 
{
	var final
    p1=parseInt(document.getElementById("PrecioUno").value);
    p2=parseInt(document.getElementById("PrecioDos").value);
    p3=parseInt(document.getElementById("PrecioTres").value);
    console.log(p1);
    console.log(p2);
    console.log(p3);
    final=(p1+p2+p3)*1.21;
    alert(final);
}