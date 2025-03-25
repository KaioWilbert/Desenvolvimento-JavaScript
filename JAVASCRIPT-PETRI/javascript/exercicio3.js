const numeros = [2, 3, 4, 5, 7, 10, 11, 12, 13, 17];

let somaPares = 0;
let somaPrimos = 0;

function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < numeros.length; i++) {
  const num = numeros[i];

  if (num % 2 === 0) {
    somaPares += num;
  }

  if (ehPrimo(num)) {
    somaPrimos += num;
  }
}

console.log("Soma dos pares:", somaPares);
console.log("Soma dos primos:", somaPrimos);
