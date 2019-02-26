function mostrar()
{
var y,c=0;
y=prompt("Ingrese numero:");
y=parseInt(y);
for(x=1;x!=y+1;x++)
    {   
        if(x%2==0)
        {
            document.write("<br>"+x);
            c++
        }
    }
document.write("<br> Cantidad de pares encontrados: "+c);
}//FIN DE LA FUNCIÓN