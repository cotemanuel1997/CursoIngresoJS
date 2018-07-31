function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta!="no" )
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador++;
		respuesta=prompt();
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN