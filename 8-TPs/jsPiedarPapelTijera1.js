/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    eleccionMaquina=Math.floor(Math.random()*(3-1)+1);
    alert("Piedra");
    alert("Papel");
    alert("O tijeta");
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
    switch(eleccionMaquina)
    {
        case 1:
            alert("Empate, elige de nuevo");
            break;
        case 2:
            alert("You Lose, CPU: Papel");
            break;
        case 3:
            alert("Ganaste! CPU: Tijera");
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
            break;
        case 2:
            alert("Empate, elige de nuevo");
            break;
        case 3:
            alert("You Lose, CPU: Tijera");
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
            break;
        case 2:
            alert("Ganaste! CPU: Papel");
            break;
        case 3:
            alert("Empate, elige de nuevo");
            break;
    }
    comenzar();

}//FIN DE LA FUNCIÓN