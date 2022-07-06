/*

Luna Matias 
Ejercisio E/S 03

Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{
    //reservo estacio en memoria pra guardar el nombre del usuario
var nombre;
//guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt
nombre = prompt("ingrese su nombre");
// copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto enbebida de la pagina
document.getElementById("txtIdNombre").value = nombre;

}

 