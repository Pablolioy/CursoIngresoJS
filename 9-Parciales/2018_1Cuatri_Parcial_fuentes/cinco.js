function mostrar()
{
  var pago, descuento=0
  var paquete
  var habitacion, total=0
  habitacion=prompt("Ingrese valor de la habitacion: ");
  parseInt(habitacion);
  paquete=prompt("Paquetes:\n1 - Todo Incluido - 10% de descuento con PayPal\n2 - Solo Desayuno - 10% de descuento con efectivo");
  paquete=parseInt(paquete);
  pago=prompt("Ingrese forma de pago: \n1 - Visa (10% off)\n2 - PayPal (15% off)\n3 - MercadoPago (10% off)\n4- Efectivo (20% off)\n5 - Otros (5% off)");
  pago=parseInt(pago);
  switch(pago)
  {
    case 1: //VISA
    case 3: //MP
      descuento=0.1;
      break;
    case 2: //PAYPAL
      descuento=0.15;
      switch(paquete)
      {
        case 1:
          descuento=descuento+0.1;
          break;
      }
      break;
    case 4: //EFECTIVO
      descuento=0.2;
      switch(paquete)
      {
        case 1:
          descuento=descuento+0.15;
          break;
        case 2:
          descuento=descuento+0.1;
          break;
      }
    case 5: //OTROS
      descuento=0.05;
      break;
  }
  total=habitacion-(habitacion*descuento);
  alert("Total es: "+total);
}
