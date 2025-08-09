// Punto 1 - convertidorTemp
function convertidorTemp(TempC) {
    return (TempC * (9 / 5) + 32);
}
console.log("convertidorTemp");
console.log(convertidorTemp(60));

// Punto 2 - resolvedor
function resolvedor(a, b, c, positivo) {
    let x;
    const num = b**2 - 4*a*c;
    if (num < 0) {
        return "No hay raíz";
    } else {
        if (positivo) { //Positivo debe ser true o false
            x = (-b + Math.sqrt(num)) / (2 * a);
        } else {
            x = (-b - Math.sqrt(num)) / (2 * a);
        }
    }
    return x;
}
console.log("resolvedor");
console.log(resolvedor(1, 5, 4, true));  
console.log(resolvedor(1, 5, 4, false)); 

// Punto 3 - mejorParidad
function mejorParidad(nump) {
    return nump % 2 === 0;
}
console.log("Mejor paridad");
console.log(mejorParidad(2));

// Punto 4 - peorParidad
function peorParidad(nump) {
    let contador = 0;
    for (let i = 1; i <= nump && i <= 10; i++) {
        contador++;
    }
    if (contador % 2 === 0) {
        return "El número es par " + nump;
    } else {
        return "El número es impar " + nump;
    }
}
console.log("Peor paridad");
console.log(peorParidad(3));
