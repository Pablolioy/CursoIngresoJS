var numeroSecreto=0; 
var contadorIntentos=0;
var n;   									//bandera

function comenzar()
{
	document.getElementById("intentos").value=contadorIntentos;
	numeroSecreto=Math.floor(Math.random()*(101-1)+1); //Genero el número RANDOM entre 1 y 100
	n=1;       															
	alert("Que comiense el Juego");
	console.log(numeroSecreto);
}

function verificar()
{
	if(n==1)
	{
		contadorIntentos++;
		document.getElementById("intentos").value=contadorIntentos;
		console.log(contadorIntentos);
		if(document.getElementById("numero").value==numeroSecreto)
		{
			switch(contadorIntentos)
			{
				case 1:
					alert("Usted es un Psiquico");
					break;
				case 2:
					alert("Excelente Percepcion");
					break;
				case 3:
					alert("Esto es suerte");
					break;
				case 4:
					alert("Excelente tecnica");
					break;
				case 5:
					alert("Usted esta en la media");
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					alert("Falta tecnica");
					break;
				default:
					alert("Afortunado en el amor");
					break;
			}
			contadorIntentos=0;
			numeroSecreto=0;
			n=0;
			document.getElementById("numero").value="";
			document.getElementById("intentos").value="";
		}
		else{
			alert("NOP...Intente de nuevo");
		}
	}
	else
	{
		alert("Precione COMENZAR primero");
	}
}
