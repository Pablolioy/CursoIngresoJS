function mostrar()
{
    var marca, peso, temperatura              //valores a ingresar
    var tempPar=0                             //Temperaturas Par
    var MarcaPesado                           //Marca mas pesada  
    var bajoCero=0                            //productos bajo °0
    var sumaPeso=0, PromPeso, cantPeso=0      //Promedio de peso
    var max=1, min=100                        //peso maximo y minimo
    var continuar                             //Validacion para continuar ingresando datos  
    var banderaPeso=false, banderaTemp=false  //Banderas                  
    do{
        marca=prompt("Marca");
        peso=prompt("Peso");
        peso=parseInt(peso);
        while(banderaPeso==false)
        {
            if(isNaN(peso)==false)
                {
                    if(peso<1 || peso>100)
                    {
                        peso=prompt("Fuera de rango");
                        peso=parseInt(peso);
                    }
                    else{
                        banderaPeso=true;
                    }
                }
                else{
                    peso=prompt("Numero por favor");
                    peso=parseInt(peso);
                }
            }
        temperatura=prompt("Temperatura");
        temperatura=parseInt(temperatura);
        while(banderaTemp==false)
        {
            if(isNaN(temperatura)==false)
                {
                    if(temperatura<-30 || temperatura>30)
                    {
                        temperatura=prompt("Fuera de rango");
                        temperatura=parseInt(temperatura);
                    }
                    else{
                        banderaTemp=true;
                    }
                }
                else{
                    temperatura=prompt("Numero por favor");
                    temperatura=parseInt(temperatura);
                }
        }
        if(temperatura%2==0)
        {
            tempPar++;
        }
        if(temperatura<0)
        {
            bajoCero++;
        }
        if(peso>max)
        {
            max=peso;
            MarcaPesado=marca;
        }
        
        if(peso<min)
        {
            min=peso;
        }

        cantPeso++;
        sumaPeso=sumaPeso+peso;
        banderaPeso=false;
        banderaTemp=false;
        continuar=prompt("Continuar? S/N");
        while(continuar!="s" && continuar!="n")
            {
                continuar=prompt("Incorrecto\nContinuar? S/N");
            }
    }while(continuar=="s")
    PromPeso=sumaPeso/cantPeso;
    document.write("Temp Pares: "+tempPar+"<br>Marca mas pesada: "+MarcaPesado+"<br>Cantidad bajo °0: "+bajoCero+"<br>Promedio peso: "+PromPeso+"<br>Max: "+max+"<br>Min: "+min);
}
