function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;
    if(edad<13)
    {
        alert("Es menor de edad");
    }
    else
    {
        if(edad<=17)
        {
            alert("Es adolescente");
        }
        else
        {
             alert("Es mayor de edad");
        }
    }
}//FIN DE LA FUNCIÓN