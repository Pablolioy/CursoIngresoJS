function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo!="f" && sexo !="m")
{
    alert("ERROR");
    sexo = prompt("ingrese f ó m .");
}
if (sexo==="f")
{
    sexo="Femenino";
}
else
{
    sexo="Masculino";
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN