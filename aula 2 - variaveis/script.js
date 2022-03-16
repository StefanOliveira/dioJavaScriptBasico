// tipos primitivos

// boolean
var yOuF = false;
console.log(typeof(yOuF));

// number
var numeroQlqr = 1;
console.log(typeof(numeroQlqr));

// string
var nome = "Stefan";
console.log(typeof(nome));

// function
var funcao = function() {}
console.log(typeof(funcao));

// var - caso não possua valor será tratada como null
var variavel = 'Stefan';
variavel = 'Sophia'; // escopo global pode ter seu valor alterado
console.log(variavel);

/* let - escopo local de bloco, pode ter seu valor alterado,
   se não possuir valor inicial será tratada como null **/

let variavel2 = 'Estelar';
console.log(variavel2);

/* const - escopo local de bloco, somente leitura, o valor
   inicial é obrigatório e não pode ser alterado **/

const constante = 'DevJS';
console.log(constante);


// Escopo global - visivel em todo código
var escopoGlobal = 'global';
console.log(escopoGlobal);

/* Escopo local - declarada dentro de um bloco
   sua visibilidade pode ficar disponível ou não **/
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// Atribuição
var nome = 'Stefan';

// Comparacação ==
var comparacao = '0' == 0;
console.log(comparacao); 

// Comparação identica ===
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); 

// Operadores Aritmeticos
var adicao = 4 + 2;
console.log(adicao);

var subtracao = 5 - 3;
console.log(subtracao);

var multiplicacao = 10 * 3;
console.log(multiplicacao);

var divisaoReal = 15 / 5;
console.log(divisaoReal);

var divisaoInteira = 10 % 3;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);

// Operadores relacionais
var maiorQue = 2 > 3;
console.log(maiorQue);

var menorQue = 5 < 3;
console.log(maiorQue);

var maiorIgual = 10 >= 8;
console.log(maiorIgual);

var menorIgual = 5 <= 6;
console.log(menorIgual);

// Operadores lógicos
var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);

