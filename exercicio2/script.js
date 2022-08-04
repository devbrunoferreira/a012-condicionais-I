/////////////////////////// EXERCÍCIO 2 /////////////////////////////

let idade = +prompt('Qual é a sua idade?'),
    terminouEnsinoMedio = true, cursandoSuperior = false;

// CHECAR MAIORIDADE
if (idade >= 18) {
    console.log(`Você é maior de idade. Você tem ${idade} anos.`);
} else {
    console.log(`Você NÃO é maior de idade. Você tem ${idade} anos.`);
}

// CHECAR SE TERMINOU O ENSINO MÉDIO
if (terminouEnsinoMedio === true) {
    console.log('Você já concluiu o ensino médio!');
} else {
    console.log('Você ainda não concluiu o ensino médio.');
}

//CHECAR SE ESTÁ CURSANDO ENSINO SUPERIOR
if (cursandoSuperior === true) {
    console.log('Você está cursando o ensino superior.');
} else {
    console.log('Você ainda não está cursando o ensino superior.');
}