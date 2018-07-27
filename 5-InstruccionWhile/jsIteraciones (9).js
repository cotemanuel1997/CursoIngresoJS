function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var minimo=-9999
	var maximo=+9999
	while(respuesta!='no')
	{
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			numero=minimo;
		}

		
	
		respuesta=prompt()
	}

	document.getElementById("maximo").value=maximo
	document.getElementById("minimo").value=minimo





}//FIN DE LA FUNCIÓN