function mostrar()
{
  var num=0;              //varieble numero
  var cposit=0,cnegat=0;    //variables contador
  var positivo=0,negativo=0;//variables acumulador
  var par=0;
  var cero=0;             //ceros
  var prompos=0,promneg=0;  //varibles promedio
	//declarar contadores y variables

  var respuesta='si';
  respuesta=prompt("Comenzar? (si/no)");
  while(respuesta!="si" && respuesta!="no")
  {
    respuesta=prompt("Error, vuelve a ingresar");
    console.log(respuesta);
  }
	while(respuesta=='si')
	{
    num=prompt("Ingrese numero: ");
    num=parseInt(num);
    console.log(num);
    if(num>0)
      {
        if(num%2==0)
        {
          par++;
        }
        cposit++;
        positivo=positivo+num;
      }
    else
      {
        if(num<0)
          {
            if(num%2==0)
              {
                par++;
              }
            cnegat++;
            negativo=negativo+num;
          }
        else
          {
            cero++;
          }
      }
    respuesta=prompt("Continuar? (si/no)");
    while(respuesta!="si" && respuesta!="no")
    {
      respuesta=prompt("Error, vuelve a ingresar");
      console.log(respuesta);
    }
	}
prompos=positivo/cposit;
promneg=negativo/cnegat;
document.write("Suma de los negativos: "+negativo+"<br>Suma de los positivos :"+positivo+"<br>Cantidad de positivos :"+cposit+"<br>Cantidad de negativos :"+cnegat+"<br>Cantidad de ceros :"+cero+"<br>Cantidad de números pares :"+par);
document.write("<br>Promedio de positivos :"+prompos+"<br>Promedios de negativos :"+promneg+"<br>Diferencia entre positivos y negativos :"+(positivo+negativo));

}//FIN DE LA FUNCIÓN0

