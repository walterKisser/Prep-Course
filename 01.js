/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloStrings(array) {
  // ' La funcion llamada 'soloStrings recibe como argumento un arreglo los strings.de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo 
  // Ej:
  // soloStrings([1, 'Henry', 2, 'Toni']) debe retornar ['Henry', 'Toni']

  // Tu código aca:
 var array = [1, 'Henry', 2, 'Toni'];
var New_Array = [];
var longitud = array.length;


for (element of array) {

  if (typeof element === "string") {

    New_Array.push(element);
    
  }
}
return New_Array;
}
// No modifiques nada debajo de esta linea //

module.exports = soloStrings