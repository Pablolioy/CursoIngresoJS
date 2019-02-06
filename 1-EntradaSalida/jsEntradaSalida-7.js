/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var resul;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resul=num1+num2;
    alert("el resultado de la suma es: " + resul);
}

function restar()
{
	var num1;
    var num2;
    var resul;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resul=num1-num2;
    alert("el resultado de la resta es: " + resul);
}

function multiplicar()
{ 
	var num1;
    var num2;
    var resul;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resul=num1*num2;
    alert("el resultado de la multiplicacion es: " + resul);
}

function dividir()
{
	var num1;
    var num2;
    var resul;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resul=num1/num2;
    alert("el resultado de la division es: " + resul);
}

