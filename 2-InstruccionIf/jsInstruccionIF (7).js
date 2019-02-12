function mostrar()
{
//tomo la edad  
    var edad=document.getElementById("edad").value;
    var soltero = "Soltero";
    if(edad<18 && document.getElementById("estadoCivil").value != soltero)
    {
        alert("Es muy pequeño para NO ser soltero");
    }
    else
    {
        alert("ok");
    }
}//FIN DE LA FUNCIÓN