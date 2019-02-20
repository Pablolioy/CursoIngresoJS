function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
  respuesta=prompt("Ingrese numero, para detener tipee 0");
  respuesta=parseInt(respuesta);
  while(respuesta!=0)
    {
      acumulador=acumulador+respuesta;
      console.log(acumulador)
      contador++;
      console.log(contador);
      respuesta=prompt("Ingrese numero, para detener escriba: si");
      respuesta=parseInt(respuesta);
    }
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
