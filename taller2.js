//1
function findMax(lista) {
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

//2

function includes(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return true;
        }
    }
    return false;   
    
}

//3

function sum(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total;
}

//4
function missingNumbers(lista) {
  if (lista.length === 0) return [];

  let min = lista[0];
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < min) min = lista[i];
    if (lista[i] > max) max = lista[i];
  }
  let faltante = [];


  for (let i = min; i <= max; i++) {
    let encontrado = false;
    for (let j = 0; j < lista.length; j++) {
      if (lista[j] === i) {
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      faltante.push(i);
    }
  }
  return faltante;
}


console.log(findMax([3, 17, -1, 4, -19]));
console.log(includes([3, 17, -1, 4, -19], 2)); 
console.log(includes([3, 17, -1, 4, -19], 4)); 
console.log(sum([3, 17, -1, 4, -19])); 
console.log(missingNumbers([7, 2, 4, 6, 3, 9])); 