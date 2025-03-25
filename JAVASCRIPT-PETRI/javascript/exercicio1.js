const pessoas = [
    { altura: 1.80, sexo: 'M' }, { altura: 1.65, sexo: 'F' },
    { altura: 1.70, sexo: 'M' }, { altura: 1.60, sexo: 'F' },
    { altura: 1.75, sexo: 'M' }, { altura: 1.55, sexo: 'F' },
    { altura: 1.90, sexo: 'M' }, { altura: 1.68, sexo: 'F' },
    { altura: 1.85, sexo: 'M' }, { altura: 1.62, sexo: 'F' },
    { altura: 1.78, sexo: 'M' }, { altura: 1.58, sexo: 'F' },
    { altura: 1.82, sexo: 'M' }, { altura: 1.64, sexo: 'F' },
    { altura: 1.88, sexo: 'M' }
];

let maior = pessoas[0].altura;
let menor = pessoas[0].altura;
let somaMulheres = 0;
let qtdMulheres = 0;
let qtdHomens = 0;

for (let p of pessoas) {
    if (p.altura > maior) maior = p.altura;
    if (p.altura < menor) menor = p.altura;
    if (p.sexo === 'F') {
        somaMulheres += p.altura;
        qtdMulheres++;
    } else {
        qtdHomens++;
    }
}

console.log(`Maior altura: ${maior}`);
console.log(`Menor altura: ${menor}`);
console.log(`Média de altura das mulheres: ${(qtdMulheres ? somaMulheres / qtdMulheres : 0).toFixed(2)}`);
console.log(`Número de homens: ${qtdHomens}`);
