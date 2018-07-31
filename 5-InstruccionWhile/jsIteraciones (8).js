function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var cero=0;
	var numero;
	var contadorPositivo=0;
	var contadorNegativo=0;
	
	var respuesta='si';

	while(respuesta!="no")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		contador++;

		if(numero > 0)
		{
			positivo+=numero;// === acumulador=acumulador+numero;
			contadorPositivo++;
		}
		else if(numero < 0)
		{
			negativo*=numero;
			contadorNegativo++;
		}
		else
		{
			cero++;

		}
		respuesta=prompt();
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN