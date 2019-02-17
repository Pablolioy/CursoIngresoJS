var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina=Math.floor(Math.random()*(4-1)+1);
    alert("Piedra");
    alert("Papel");
    alert("O tijeta");
    console.log(eleccionMaquina);
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
    {
        case 1:
			alert("Empate, elige de nuevo");
			ContadorDeEmpates++;
            break;
        case 2:
			alert("You Lose, CPU: Papel");
			ContadorDePerdidas++;
            break;
        case 3:
			alert("Ganaste! CPU: Tijera");
			ContadorDeGanadas++;
            break;
    }
    comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
    {
        case 1:
			alert("Ganaste! CPU: Piedra");
			ContadorDeGanadas++;
            break;
        case 2:
			alert("Empate, elige de nuevo");
			ContadorDeEmpates++;
            break;
        case 3:
			alert("You Lose, CPU: Tijera");
			ContadorDePerdidas++;
            break;
    }
    comenzar();
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
    {
        case 1:
			alert("You Lose, CPU: Piedra");
			ContadorDePerdidas++;
            break;
        case 2:
			alert("Ganaste! CPU: Papel");
			ContadorDeGanadas++;
            break;
        case 3:
			alert("Empate, elige de nuevo");
			ContadorDeEmpates++;
            break;
    }
    comenzar();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("perdidas").value=ContadorDePerdidas;
	document.getElementById("empatadas").value=ContadorDeEmpates;
}