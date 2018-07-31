/*JOSE M 25

MARIA F 16

JESUS M 33

FER F 81// validar sexo y edad



*/
function mostrar()
{
	var sexo;
	var edad;
	var contador;
	var nombre;

	contador=0;

	while(contador<4)
	{
		contador++;
		nombre=prompt("Ingrese nombre valido");

		sexo=prompt("Ingrese sexo valido");
		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("Ingrese sexo valido");
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<0||edad>100)
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}





	}


	
	document.write(contadorDeMujeres);
	document.write(conadorDeHombres);

}	



