function mostrar()
{
    var num1=prompt("1er ");
    var num2=prompt("2do ");
    var suma,resta;
    if(num1==num2)
    {
        alert(num1+num2);
    }
    else
    {
        num1=parseInt(num1);
        num2=parseInt(num2);
        if(num1>num2)
        {
            resta=num1-num2;
            console.log(num1);
            console.log(num2);
            console.log(resta);
            alert(resta);
        }
        else
        {
            suma=num1+num2;
            if(suma>10)
            {
                alert("la suma es " +suma +" y supero el 10");
            }
            else
            {
                alert("ok");
            }
        }

    }
}
