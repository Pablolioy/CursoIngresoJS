function mostrar()
{
    var precio=prompt("Ingrese Precio");
    var por=prompt("Ingrese porcentaje a descontar");
    var final;
    final=precio-(precio*por/100);
    console.log(precio);
    console.log(por);
    console.log(final);
    document.getElementById("elPrecioFinal").value=final;
}
