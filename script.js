// ex 1:

let var_indefinida;
console.log(`Variável Indefinida: ${var_indefinida}`);
// declaração da variável indefinida

let var_vazia = null;
console.log(`Variável Vazia: ${var_vazia}`);
// declaração da variável vazia

var variavel_com_valor = "checkpoint 1";
console.log(`Variável com valor: ${variavel_com_valor}`);
// declaração da variável com valor

// ex 2:

var string1 = "132.842";
let conversao_string1 = parseFloat(string1);
console.log(`String convertida para float: ${conversao_string1}`)
console.log(`Tipo da variável convertida: ${typeof (conversao_string1)}`);

// ex 3:
// Declarando variavel de tipo inteiro
let numeroInteiro = 10;
console.log("Valor original:", numeroInteiro);

// Convertendo para float
let numeroFloat = parseFloat(numeroInteiro);
console.log("Valor convertido:", numeroFloat);

// Verificando o tipo da variável após a conversão
let verTipo = typeof numeroInteiro
console.log(verTipo);

// ex 4:
// Declarando variavel de tipo float
let nFloat = 10.50;
console.log("Valor original:", nFloat);

// Convertendo para inteiro
let nInt = parseInt(nFloat);
console.log("Valor convertido:", nInt);

// Verificando o tipo da variável
let verTipo1 = typeof nFloat
console.log(verTipo1)

// ex 5:
//Declarando nome
let nome = "Clarêncio da Silva"
console.log(nome)

//Declarando idade
let idade = 39
console.log(idade)

//Declarando email
let email = "clarencio43@gmail.com"
console.log(email)

//Declarando telefone
let telefone = "(11) 94545-6789"
console.log(telefone)