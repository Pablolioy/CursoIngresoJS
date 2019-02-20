function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
  var num=0;
  var respuesta;
  respuesta=prompt("Comenzar? (si/no)");
  validar(respuesta)
  while(respuesta=="si")
    {
      num=prompt("Ingrese numero: ");
      num=parseInt(num);
      if(num>=0)
      {
        positivo=positivo+num;
      }
      else{
        negativo=negativo*num;
      }
      respuesta=prompt("Desea continuar? (si/no)");
      validar(respuesta)
      console.log(positivo)
      console.log(negativo)
    }
alert("ok");
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN


function validar(respuesta)
{
   while(respuesta!="si" && respuesta!="no")
    {
      respuesta=prompt("Error, vuelve a ingresar");
    }
}
