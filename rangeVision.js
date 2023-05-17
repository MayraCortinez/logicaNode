/* Crear la función range_vision() que, dado un entero no negativo, determine si hay 
al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de 
todos los dígitos del entero. 
La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de 
vista más bajo en el número dado, false de lo contrario.

Imagine un número entero no negativo, digamos 34315. 
Cada dígito en el número entero tiene un llamado rango de visión . 
El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, 
puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar 
a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. 
El rango de visión de cada dígito es su propio valor.

Ahora bien, el rango de visión de un dígito define el llamado valor de 
visión, que es la suma de los dígitos dentro del rango de visión. Entonces, 
el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 
4 el valor de visión es 3+3+1+5=12. */


function rangeVision(numero) {
  //Convierte el número en un array de dígitos
  const digitos = String(numero).split("").map(Number);

  //Array para almacenar los rangos de visión distintos de uno
  const rangosDistintosDeUno = [];

  //Array par almacenar los rangos de visión de los dígitos iguales a uno
  const rangosIgualesAUno = [];

  //Calcula los rangos de visión para los dígitos distintos de uno
  for (let i = 0; i < digitos.length; i++) {
    if (digitos[i] !== 1) {
      let sumaDistintosDeUno = 0;

      //Suma los valores dentro del rango de visión del dígito actual
      for (let j = i - digitos[i]; j <= i + digitos[i]; j++) {
        if (j >= 0 && j < digitos.length && j !== i) {
          sumaDistintosDeUno += digitos[j];
        }
      }

      //Agrega la suma al array de rangos de visión de los dígitos distintos de uno
      rangosDistintosDeUno.push(sumaDistintosDeUno);
    }

    //Calcula los rangos de visión para los dígitos iguales a uno
    for (let i = 0; i < digitos.length; i++) {
      if (digitos[i] === 1) {
        let sumaIgualesAUno = 0;

        // Suma los valores dentro del rango de visión del dígito actual
        for (let j = i - digitos[i]; j <= i + digitos[i]; j++) {
          if (j >= 0 && j < digitos.length && j !== i) {
            sumaIgualesAUno += digitos[j];
          }
        }

        // Agrega la suma al array de rangos de visión de los dígitos iguales a uno
        rangosIgualesAUno.push(sumaIgualesAUno);
      }
    }

    // Compara los rangos de visión de los dígitos distintos de uno con los dígitos iguales a uno
    for (let i = 0; i < rangosDistintosDeUno.length; i++) {
      for (let j = 0; j < rangosIgualesAUno.length; j++) {
        if (rangosDistintosDeUno[i] === rangosIgualesAUno[j]) {
          return true;
        }
      }
    }

    // No se encontraron coincidencias, devuelve false
    return false;
  }
}
console.log(rangeVision(34315));
    
