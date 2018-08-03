function mostrar()
{
	var contador;//1 en while.
	contador=0;//2
	

	for(;;)
	{
		contador++;//3
		console.log(contador);
		

		if(contador==5)
		break;
	}
	console.log("final "+ contador);
}