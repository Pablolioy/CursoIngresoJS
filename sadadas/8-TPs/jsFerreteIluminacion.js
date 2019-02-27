
    var precio=35
    var lam
    var imp
function CalcularPrecio () 
{
 	lam=parseInt(document.getElementById("Cantidad").value);
    suma=precio*lam;
    if(lam>=6)
    {
        document.getElementById("precioDescuento").value=suma-(suma*0.50);
    }
    else
    {
        if(lam==5)// && document.getElementById("Marca").value=="ArgentinaLuz")
        {
            if(document.getElementById("Marca").value=="ArgentinaLuz")
            {
            document.getElementById("precioDescuento").value=suma-(suma*0.40);
            }
            else
            {
                document.getElementById("precioDescuento").value=suma-(suma*0.30);
            }
        }
        else
        {
            if(lam==4)
            {
                if(document.getElementById("Marca").value=="ArgentinaLuz" || document.getElementById("Marca").value=="FelipeLamparas")
                {
                document.getElementById("precioDescuento").value=suma-(suma*0.25);
                }
                else
                {
                    document.getElementById("precioDescuento").value=suma-(suma*0.20);
                }
            }
            else
            {
                if(lam==3)
                {
                    if(document.getElementById("Marca").value=="ArgentinaLuz")
                    {
                        document.getElementById("precioDescuento").value=suma-(suma*0.15);
                    }
                    else
                    {
                        if(document.getElementById("Marca").value=="FelipeLamparas")
                        {
                            document.getElementById("precioDescuento").value=suma-(suma*0.10);
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=suma-(suma*0.05);
                        }
                    }
                }
                else
                {
                    document.getElementById("precioDescuento").value=suma;
                }    
            }
        }
    }
    if(document.getElementById("precioDescuento").value>120)
    {
        imp=parseInt(document.getElementById("precioDescuento").value*0.1);
        document.getElementById("precioDescuento").value=parseInt(document.getElementById("precioDescuento").value)+imp;
        alert("IIBB Usted pago "+imp);
    }
}
