/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, 
de la siguiente manera:


Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas. */

function numberCardinality (n) {

    switch (true) {
        case n %10 === 0:
            console.log("zero");
        break;
        case n %5 === 0:
            console.log("five");
        break;
        case n %2 === 0 && n %10 !== 0:
            console.log("even");
        break;
        case n %2 !== 0 && n %5 !== 0:
            console.log("odd");
        break;
    }
}

numberCardinality(58);