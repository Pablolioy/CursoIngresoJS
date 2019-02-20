function mostrar()
{
  var contador=0;
  var max=0,min=0;
	// declarar variables
  var num, bandera=true;
	var respuesta='si';
  respuesta=prompt("Comenzar? (si/no)");
  validar(respuesta)
	while(respuesta=='si')
	{
		num=prompt("Ingrese numero: ");
      num=parseInt(num);
      if(bandera)
      {
        max=num;
        min=num;
        bandera=false;
      }
      else{
        if(num<min){
          min=num;
        }
        if(num>max)
        {
          max=num;
        }
      }
      respuesta=prompt("Desea continuar? (si/no)");
      validar(respuesta)
      console.log(max)
      console.log(min)
  }
  alert("Ok");

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;
}
//FIN DE LA FUNCIÓN

function validar(respuesta)
{
   while(respuesta!="si" && respuesta!="no")
    {
      respuesta=prompt("Error, vuelve a ingresar");
    }
}
