function mostrar()
{

var y,c=0;
y=prompt("Ingrese numero:");
y=parseInt(y);
for(x=1;x!=y+1;x++)
    {   
        console.log(x);
        console.log(y);
        if(y%x==0)
        {
            document.write("<br>"+x);
            c++
        }
    }
document.write("<br> Cantidad de divisores encontrados: "+c);
}//FIN DE LA FUNCIÓN
