function mostrar()
{
    var alumno=1
    var nota=0, mayornota=0, sumaNota=0, cantidadnotas=0
    var sexo, s
    var min=10
    var promedio
    var continuar
    var bandera=false
    while(alumno<=5)
        {
            sexo=prompt("Ingresar Sexo:");
            if(sexo!="f" && sexo!="m")
                {
                    alert("Valor incorrecto");
                    continue;
                }
            do{
                nota=prompt("Ingrese nota: ");
                nota=parseInt(nota);
                if(isNaN(nota)==false)
                {
                    if(nota>10 || nota<0)
                        {
                            alert("valor incorrecto!");
                            continue;
                        }
                }
                else{
                    alert("no ingresaste numero");
                    continuar="s";
                    continue;
                }
                if(nota<min)
                    {
                        min=nota;
                        s=sexo;
                    }
                if(sexo=="m" && nota>=6 && bandera==false)
                    {
                        mayornota++;
                        bandera=true;
                    }
                sumaNota=sumaNota+nota;
                cantidadnotas++;
                continuar=prompt("Continuar agregando notas del alumno? S/N");
                while(continuar!="s" && continuar!="n")
                    {
                        continuar=prompt("Incorrecto\nContinuar agregando notas del alumno? S/N");
                    }
            }while(continuar=="s")
            console.log(alumno);
            console.log(min);
            console.log(s);
            console.log(mayornota);
            console.log(sumaNota);
            console.log(cantidadnotas);
            console.log("-------");
            alumno++;
            bandera=false;
        }
    promedio=sumaNota/cantidadnotas;
    alert("Promedio: "+promedio+"\nNota mas baja: "+min+" de sexo: "+s+"\nCantidad de varones con 6 o mas: "+mayornota);
}
