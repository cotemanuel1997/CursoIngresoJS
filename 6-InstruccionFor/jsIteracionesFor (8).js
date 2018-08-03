function mostrar()
{
	var divisores;
	var numeroIngresado;
	var numeroAnterior;
	
	divisores=0;

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado= parseInt(numeroIngresado);

	/*for(numerosRecorrido=numeroIngresado;numerosRecorridos>1;numerosRecorridos--)
	{
		for(numeroAnterior=)

	}*/

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			divisores++;
			break;
		}
	}

	if(divisores==0)
	{
		console.log("es primo");
	}else
	{
		console.log("NO es de los numeros primo");
	}
	



}//FIN DE LA FUNCIÓN