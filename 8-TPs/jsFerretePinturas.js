/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var tem
function FahrenheitCentigrados () 
{
	tem=document.getElementById("Temperatura").value;
    alert(tem +"º Fahrenheit son " +((tem-32)/1.8) +"º Centígrados");
}

function CentigradosFahrenheit () 
{
    tem=document.getElementById("Temperatura").value;
    alert(tem +"º Centígrados son " +((tem*1.8)+32) +"º Fahrenheit");
}
