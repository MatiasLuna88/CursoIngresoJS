/*

Luna Matias 
Ejercicio 09 bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento
	let porcentaje 
	let resultado;
	
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	aumento = prompt ("Aumento de Sueldo en %");
	
	aumento = sueldo * aumento;
	
	porcentaje = aumento / 100;

	resultado = sueldo + porcentaje;

	document.getElementById("txtIdResultado").value = resultado;
	


	/*
	let num1;
	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdSueldo").value);
	
	resultado = num1 * 1.1; 
	
	document.getElementById ("txtIdResultado").value = resultado*/
	
}
