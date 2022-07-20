// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  return Object.entries(objeto);
  // Object.entries(ºOBJETOaCONVERTIRº) devuelde un array con propiedades y valores (un array por propiedad) // termina siendo un array de array.
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí


  // con 'for'
  var resultado ={};
  for (let i = 0; i < string.length; i++) {
    if (resultado[string[i]]){
      resultado[string[i]] ++;
    }else{
      resultado[string[i]] = 1;
    }
  }
  return resultado;

  
  // con 'reduce'
  // var arrayString = string.split('');
  // var resultado = arrayString.reduce(function(acc,elmento){
  //   if (acc[elmento]){
  //     acc[elmento] ++;
  //   }else{
  //     acc[elmento]= 1;
  //   }
  //   return acc;
  // },{});
  // return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var resultadoUp = '';
  var resulatdoDown ='';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()){
        resultadoUp += s[i];
    }else{
      resulatdoDown +=s[i];
    }    
  }
  return resultadoUp + resulatdoDown;  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí


  // metodo slpit() separa una cadena en un array definiendo que caracter los separa (' ') => quita espacios // ('') => no quita nada separa uno por uno
  // metodo reverse() voltea un array el elemento 1 pasa a ser el ultimo 
  // metodo join() junta un array definiendo el elemento que quedara entre ellos (' ') => agrega el espacio // ('')=> no agrega nada
  // con 'for'
  var array = str.split(' ');
  for (let i = 0; i < array.length; i++) {
    var arr = array[i].split('');
    arr.reverse()
    array[i] = arr.join('');
    if(i !== array.length -1){
      array[i] += ' ';
    }
  }
  return array.join('');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí


  // metodo toString() transforma a cadena un int
  var numeroreverse = numero.toString().split('').reverse().join('');
  if (numero == numeroreverse){
    return 'Es capicua';
  }
  return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí


   // quito el mas grande y lo guardo al inicio de un array  repito hasta terminar el array;
  // // metodo sort() 
  //   return arr.sort(function(elementoA,elementoB){
  //     return elementoA.length - elementoB.length;
  //   });

  // metodo sin sort() PD: se pudo jajaj
  var arrLength = arr.length;
  var newArray = [];
  while(arrLength >0){
    var sortArr = arr.reduce(function(acc,elemento){
      return acc.length > elemento.length ? acc : elemento;
    }); // devuelve palabra mas larga
    newArray.unshift(sortArr);
    arr.splice([arr.indexOf(sortArr)],1);
    arrLength--;
  }
    return newArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var resultado = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] == arreglo2[j]){
        resultado.push(arreglo1[i]);
      }      
    }    
  }
  return resultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

