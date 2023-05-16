/* Escriba la función fizz_buzz() que devuelve un array de 1 a N, pero:


Para múltiplos de 3, imprime “Fizz”
Para múltiplos de 5, imprime “Buzz”
Para múltiplos de 3 y 5 impresiones “FizzBuzz”
La función toma un número entero N como parámetro 
y devuelve la secuencia como un array hasta el índice N.  */



function fizzBuzz (n) {

    const array = Array.from({ length: n + 1 }, (_, i) => i);

    return array.map((element) => {

        let newArray = "";
       
        switch(true){
            case element %3 === 0 && element %5 === 0:
                newArray = "FizzBuzz";
             break;
            case element %3 === 0:
                newArray = "Fizz";
            break;
            case element %5 === 0:
                newArray = "Buzz";
            break;
            default:
                newArray = element.toString();
            break;
        }
        return newArray;

    })

}


console.log(fizzBuzz(100));