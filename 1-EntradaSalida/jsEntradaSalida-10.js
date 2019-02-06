/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var impo;
    var resu;
    impo=document.getElementById("importe").value;
    impo=parseInt(impo);
    impo=impo-(impo*0.10);
    document.getElementById("resultado").value=impo;
}
