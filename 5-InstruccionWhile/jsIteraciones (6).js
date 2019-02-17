function mostrar()
{
	var contador=0;
	var acumulador=0;
	while (contador!=5)
	{
		acumulador=acumulador+parseInt(prompt("Ingrese "+ (contador+1) +"º :"));
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN