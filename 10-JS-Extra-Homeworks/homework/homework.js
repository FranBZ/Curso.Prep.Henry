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
  var matriz = Object.keys(objeto).map(function(key){
    return [key, objeto[key]];
  });
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (var i = 0; i < string.length; i++){
    if(string.charAt(i) in objeto){
      objeto[string.charAt(i)] += 1;
    } else {
      objeto[string.charAt(i)] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = '';
  var min = '';
  for (var i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      may += s[i];
    } else {
      min += s[i];
    }
  }
  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var palabra = str.split(' ');
  var invertido = palabra.map(function(elem){
    return elem.split('').reverse().join('');
  })
  return invertido.join(' ');
  
  /* var palabras = str.split(' ');
  var nuevoStr = '';
  for (var i = 0; i < palabras.length; i++){
    var letras = palabras[i].split('').reverse()
    for (var j = 0; j < letras.length; j++){
      nuevoStr += letras[j];
    }
    if (i != palabras.length -1)
    nuevoStr += ' ';
  }
  return nuevoStr; */
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var arrNumeros = numero.toString().split('');
  var retorno = 'Es capicua';
  if (arrNumeros.length/2 == 0){
    for (var i = 0; i < arrNumeros.length/2; i++){
      if (arrNumeros[i] != arrNumeros[arrNumeros.length-i-1]){
        retorno = 'No es capicua';
      }
    }
  } else {
    for (var i = 0; i < Math.trunc(arrNumeros.length/2); i++){
      if (arrNumeros[i] != arrNumeros[arrNumeros.length-i-1]){
        retorno = 'No es capicua';
      }
    }
  }
  return retorno;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = '';
  var letras = ['a','b','c']
  for (var i = 0; i < cadena.length; i++){
    if (letras.indexOf(cadena[i]) == -1){
      nuevaCadena += cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var estado = true;
  while (estado){
    estado = false;
    for(var i = 0; i < arr.length -1; i++){
      if(arr[i].length > arr[i+1].length){
        var aux = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = aux;
        estado = true;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var interseccion = [];

  if (arreglo1.length <= arreglo2.length){

    for(var i = 0; i < arreglo1.length; i++){

      if(arreglo2.indexOf(arreglo1[i]) != -1){
        interseccion.push(arreglo1[i]);
      }
    }
  } else {
    for(var i = 0; i < arreglo2.length; i++){
      if(arreglo1.indexOf(arreglo2[i]) != -1){
        interseccion.push(arreglo2[i]);
      }
    }
  }
  return interseccion;
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

