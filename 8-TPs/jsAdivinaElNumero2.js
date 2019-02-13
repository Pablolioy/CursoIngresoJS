/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*(101-1)+1);//Genero el número RANDOM entre 1 y 100
	alert("Que comiense el Juego");
	console.log(numeroSecreto);
}

function verificar()
{
	contadorIntentos=contadorIntentos+1;
 	console.log(contadorIntentos);
	document.getElementById("intentos").value=contadorIntentos;
	if(document.getElementById("numero").value==numeroSecreto)
 	{
  	  alert("Usted es un ganador!!! y en solo " + contadorIntentos +" intentos");
	}
	else
	{
		if(document.getElementById("numero").value<numeroSecreto)
		{
		alert("Falta");
		}
		else
		{
		alert("te pasaste");
		}
	}

}