function mostrar()
{

	var numero = prompt("ingrese numero");
	var contador = 0;

		while(numero<0 || numero>10)
		{
			numero = prompt("ingrese numero");
		}
		
	document.getElementById("Numero").value = numero;



}//FIN DE LA FUNCIÓN
