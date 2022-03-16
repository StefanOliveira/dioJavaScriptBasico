// O que são vetores e arrays

// como declarar um array
/**let array = ['stefan', 1, true];
console.log(array);*/

// pode armazenar diversos valores e outros arrays
/*let array2 = ['stefan', 1, true, ['array1'], ['array2'], ['array3'], false]
console.log(array2);*/

/** foreach - itera um array
array2.forEach(function(item, index){console.log(item, index)}); */

/* push - add item no final do array
array2.push('novo item');
console.log(array2); */

/* pop - remove item no final do array
array2.pop();
console.log(array2);*/

/* shift - remove item no inicio do array
array2.shift();
console.log(array2);*/

/* unshift - add item no inicio do array
array2.unshift('sophia');
console.log(array2);*/

/* indexOf() - retorna o indice de um valor
console.log(array2.indexOf(true));*/

/* splice() - remove ou substitui um item pelo indice
array2.splice(0, 3);
console.log(array2);*/

/* slice - retorna a parte de um array existente
novoArray = array2.slice(0, 3);
console.log(novoArray);*/

// Objetos
let object = { String: 'Sophia', number: 35, boolean: true, array: ["array"], objectInterno: {objectInterno: 'Objeto interno'}};

console.log(object.objectInterno);

var String = object.String;
console.log(String);

var arrayInterno = object.array;
console.log(arrayInterno);

var { String, boolean, objectInterno} = object;
console.log(String, boolean, objectInterno);



