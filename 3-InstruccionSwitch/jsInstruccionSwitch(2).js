function mostrar()
{
var mesDelAño = document.getElementById("mes").value;
switch(mesDelAño)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio.");
        break;
    case "Septiembre":
    case "Noviembre":
    case "Diciembre":
    case "Octubre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;
}
}//FIN DE LA FUNCIÓN