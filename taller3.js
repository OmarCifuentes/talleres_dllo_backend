//1
function desglosarString(cadena, tipo) {
    let vocales = "aeiouAEIOU";
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let contador = 0;

    for (let char of cadena) {
        if (tipo === "vocales" && vocales.includes(char)) {
            contador++;
        } else if (tipo === "consonantes" && consonantes.includes(char)) {
            contador++;
        }
    }

    return contador;
}

//2
function twoSum(lista, objetivo) {
    let indices = [];
    let mapa = new Map();

    for (let i = 0; i < lista.length; i++) {
        let complemento = objetivo - lista[i];
        if (mapa.has(complemento)) {
            indices.push(mapa.get(complemento), i);
            return indices;
        }
        mapa.set(lista[i], i);
    }

    return indices; // Retorna un arreglo vacío si no se encuentra ninguna pareja
}


//3
function conversionRomana(romano) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValor = 0;

    for (let char of romano) {
        let valor = valores[char];
        if (valor > prevValor) {
            total += valor - 2 * prevValor; // Ajuste por resta
        } else {
            total += valor;
        }
        prevValor = valor;
    }

    return total;
}

//4
function descomposicion(cadena) {
    let partes = cadena.split(',');
    let palabra = partes[0];
    let diccionario = partes.slice(1);

    for (let i = 0; i < diccionario.length; i++) {
        for (let j = 0; j < diccionario.length; j++) {
            if (i !== j && diccionario[i] + diccionario[j] === palabra) {
                return [diccionario[i], diccionario[j]];
            }
        }
    }

    return []; // Retorna un arreglo vacío si no se encuentran las palabras
}       


