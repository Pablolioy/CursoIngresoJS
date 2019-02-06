function mostrar()
{
//tomo la edad  
    var edad;
    var soltero = "Soltero";
    edad=document.getElementById("edad").value;
    if(edad<18 && document.getElementById("estadoCivil") !== soltero)
    {
        alert("Es muy pequeño para NO ser soltero");
    }
}//FIN DE LA FUNCIÓN