const espectadores = [
    { idade: 25, opiniao: 3 }, { idade: 30, opiniao: 2 },
    { idade: 22, opiniao: -1 }, { idade: 40, opiniao: 3 },
    { idade: 35, opiniao: 2 }, { idade: 28, opiniao: -1 },
    { idade: 32, opiniao: 3 }, { idade: 26, opiniao: 2 },
    { idade: 29, opiniao: 3 }, { idade: 21, opiniao: -1 },
    { idade: 27, opiniao: 2 }, { idade: 34, opiniao: -1 },
    { idade: 31, opiniao: 3 }, { idade: 23, opiniao: 2 },
    { idade: 38, opiniao: -1 }
];

let somaIdadeOtimo = 0, qtdOtimo = 0, qtdRegular = 0, qtdBom = 0;

for (let esp of espectadores) {
    if (esp.opiniao === 3) {
        somaIdadeOtimo += esp.idade;
        qtdOtimo++;
    } else if (esp.opiniao === -1) {
        qtdRegular++;
    } else if (esp.opiniao === 2) {
        qtdBom++;
    }
}

let mediaIdadeOtimo = qtdOtimo ? somaIdadeOtimo / qtdOtimo : 0;
let percBom = (qtdBom / espectadores.length) * 100;

console.log(`Média de idade (ótimo): ${mediaIdadeOtimo.toFixed(2)}`);
console.log(`Quantidade de pessoas (regular): ${qtdRegular}`);
console.log(`Porcentagem de pessoas (bom): ${percBom.toFixed(2)}%`);
