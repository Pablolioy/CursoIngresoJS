/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad,sexo,EstadoCivil,Sueldo,legajo,Nacionalidad
    do{
        edad=prompt("Ingrese edad");
    }while(edad<18 || edad>90);
    do{
        sexo=prompt("Ingresar sexo M/F");
    }while(sexo!="M" && sexo !="F");
    do{
        EstadoCivil=prompt("Ingrese Estado Civil: \n1 para soltero\n2 para casado\n3 para divorciado\n4 para viudo");
    }while(EstadoCivil<1 || EstadoCivil>4);
    do{
        Sueldo=prompt("Ingrese sueldo bruto, no menor a 8.000");
    }while(sueldo<8000);
    do{
        legajo=prompt("Ingrese legajo de 4 digitos");
    }while(legajo<0 || legajo>9999)
    do{
        Nacionalidad=prompt("Ingrese nacionalidad: \nA: para Argentinos")
    }
}
