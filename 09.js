/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function todos(fn) {
  // Escribi una función llamda todos en el prototipo de Arrays,
  // que recibe una funcion (callback). Asumir que fn devuelve siempre true o false.
  // La función todos debe devolver true si fn devuelve true cuando la invocamos pasandole de a uno todos los elemento del array
  // la funcion todos debe devolver false, si algún elemento del array hace que fn devuelva false;
  // por ejemplo:
  // [1,2,3].todos(function(elem) {
  //    return elem < 10;
  //  });
  // devuelve true
  // [1,2,3].todos(function(elem) {
  //    return elem < 2;
  //  });
  // devuelve false.
  Array.prototype.todos = function(callback){
         for(let i = 0; i < this.length; i++){
           if(this[i] < 10){
            return true;}
            else{
              if(this[i] < 2){
            return i;}
            if( this[i] > i.length ) {
            return false;
         }
         }
         }
   }
 /*Array.prototype.todos = function(fn) {
for( var i = 0; i < fn.length; i++ ){
if( fn[i] !== fn.length ) {
return true;
}else{
if( fn[i] > fn.length ) {
return false;
}
 }
}
 }*/
}

// No modifiques nada debajo de esta linea //

module.exports = todos