function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num=(Math.floor((Math.random()*(11-1)))+1);
	console.log(num);
	if(num>8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(num<4)
		{
			alert("Vamos, la proxima se puede");
		}
		else
		{
			alert("APROBÓ");
		}
	}

}//FIN DE LA FUNCIÓN