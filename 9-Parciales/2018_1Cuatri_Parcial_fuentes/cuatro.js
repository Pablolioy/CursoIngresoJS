function mostrar()
{
/*   var  num1,num2,num3,num4
   var  max
   var  suma

   num1=prompt("Ingrese 1º numero: ");
   num1=parseInt(num1);
   max=num1;
   num2=prompt("Ingrese 2º numero: ");
   num2=parseInt(num2);
   if(num2>max)
    {
      max=num2;
    }
   num3=prompt("Ingrese 3º numero: ");
   num3=parseInt(num3);
   if(num3>max)
    {
      max=num3;
    }
   num4=prompt("Ingrese 4º numero: ");
   num4=parseInt(num4);
   if(num4>max)
    {
      max=num4;
    }
    suma=num1+num2+num3+num4;
    if(suma>100)
    {
      suma=suma*0.9;
    }
    else{
      if(suma>50)
      {
        suma=suma*0.95;
      }
      else
      {
        suma=suma*1.15;
      }
    }
  alert("Total: "+suma+"\nNumero mayor: "+max);*/
  var num,max=0,x=1
  var y=0,

  while (x!=4) {
    x++;
    do{
      num=prompt("Ingrese numero");
      num=parseInt(num);
    }while(isNaN(num));
      if(x==1)
      {
        max=num;
      }
      else{
          if(num>max)
          {
            max=num;
          }
      }

  }
  if(y>100)
  {
    y=y-(y*0.1);
  }
  else{
    if(y>50)
    {
      y=y-(y*0.05);
    }
    else{
      y=y+(y*0.15)
    }
  }
  alert("Maximo: "+max+"\nTotal: "+y);
}
