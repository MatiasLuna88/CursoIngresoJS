/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;    
    var numero2;
    var resultado;
 

    //parseInt es convertir una cadena en numero

    numero1 = document.getElementById("txtIdNumeroUno").value;
    numero1 = parseInt(numero1);
    numero2 = document.getElementById("txtIdNumeroDos").value;
    numero2 = parseInt(numero2);
    resultado = numero1 + numero2;

    alert("La suma es " + resultado);

 
}

