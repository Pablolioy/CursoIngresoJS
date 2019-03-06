function mostrar()
{
    var numero, letra   //valores a ingresar
    var par=0, impar=0, cero=0
    var sumaPositivios=0, cantPositivios=0, promPositivios=0, SumaNegativ=0
    var max=-100, letraMax, min=100, letraMin
    var continuar, bandera=false
    do{
        letra=prompt("Letra");
        if(isNaN(letra)==false)
        {
            alert("Letra por favor");
            continuar="s";
            continue;
        }
        numero=prompt("Numero");
        numero=parseInt(numero);
        while(bandera==false)
        {
            if(isNaN(numero)==false)
            {
                if(numero<-100 || numero>100)
                {
                    numero=prompt("Fuera de rango");
                    numero=parseInt(numero);
                }
                else{
                    bandera=true;
                }
                
            }
            else{
                numero=prompt("Numero por favor");
                numero=parseInt(numero);
            }
          
        }
        if(numero%2==0)
        {
            par++;
        }
        else{
            impar++;
        }
        if(numero>0)
        {
            sumaPositivios=sumaPositivios+numero;
            cantPositivios++;
        }
        else{
            if(numero<0)
            {
                SumaNegativ=SumaNegativ+numero;
            }
            else{
                cero++;
            }
        }
        if(numero<min)
        {
            min=numero;
            letraMin=letra;
        }
        if(numero>max)
        {
            max=numero;
            letraMax=letra;
        } 
        continuar=prompt("Continuar? S/N");
        while(continuar!="s" && continuar!="n")
            {
                continuar=prompt("Incorrecto\nContinuar? S/N");
            }
    }while(continuar=="s");
    promPositivios=sumaPositivios/cantPositivios;
    document.write("Cantidad de pares: "+par+"<br>Cantidad de impares: "+impar+"<br>Promedio Positivos: "+promPositivios+"<br>Suma de negativos: "+SumaNegativ+"<br>Mayor: "+letraMax+", "+max+"<br>Minimo: "+letraMin+", "+min);
}
