//convertidorTemp
function convertidorTemp(TempC){
    return (TempC*(9/5)+32)
}
console.log("convertidorTemp")
console.log(convertidorTemp(60))

//Resolvedor

function resolvedor(a,b,c){
    let x1,x2
    const num = b**2 - 4*a*c
   if (num < 0) {
    console.log("No hay raiz")
   }else{
     x1 = (-b + Math.sqrt(num)) / 2*a
     x2 = (-b - Math.sqrt(num)) / 2*a
   }
    return [x1, x2]
}
console.log("resolvedor")
console.log(resolvedor(1,5,4))

//Mejor paridad

function mejorParidad(nump){
    return nump % 2 ===0 
}
console.log("Mejor paridad")
console.log(mejorParidad(2))

//Peor paridad
function peorParidad(nump){
    let contador = 0
    for (let i = 1; i <= nump; i++) {
        contador++
    }
    if(contador % 2 === 0){
        return ["El numero es par" + " " +nump]
    } else{
        return  ["El numero es impar" +" "+ nump]
    }
}
console.log("Peor paridad")
console.log(peorParidad(3))