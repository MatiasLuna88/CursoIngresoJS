/*

Luna Matias 
Ejercicio 10 BIS

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let num1
	let descuento 
	let porcentaje
	let resultado

	num1 = parseInt(document.getElementById("txtIdImporte").value);
	
	descuento = prompt("Descuento obtenido %");
	
	descuento = num1 * descuento;

	porcentaje = descuento / 100;

	resultado = num1 - porcentaje;

	document.getElementById("txtIdResultado").value = resultado;

	alert("Usted tuvo un descuento de $ " + porcentaje);




	/*let num1
	let resultado

	num1 = parseInt(document.getElementById("txtIdImporte").value);

	resultado = num1 * 0.75;

	document.getElementById("txtIdResultado").value = resultado;*/

	
}
