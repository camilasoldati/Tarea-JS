
let alturaRectangulo = 10;
let anchoRectangulo = 20;

function rectangulo (alturaRectangulo, anchoRectangulo) {
let areaRectangulo = alturaRectangulo * anchoRectangulo
return areaRectangulo
}

let areaRectangulo = rectangulo(alturaRectangulo, anchoRectangulo);
console.log(areaRectangulo);


let altura = 10;
let base = 20;

function triangulo (base, altura) {
let Areatriangulo = base * altura / 2
return Areatriangulo 
}

let Areatriangulo= triangulo(altura, base);
console.log(Areatriangulo);



let array = ["Buenos Aires", "Chubut", "Mendoza", "Cordoba"]


function largoDelArray (array) {
    return array.length
}
console.log(largoDelArray (array));


let palabra = "Camila"

function cantidadDeLetras (frase) {
    return frase.length
}
console.log(cantidadDeLetras (palabra));



function dolarHoy (numeroEnPesos) {
    return `la cantidad de dolares es ${numeroEnPesos / 1000}` ;
}

console.log(dolarHoy(10000));



function precioFinal (precio) {
    return `la cantidad de pesos más el IVA es ${precio * 1.21}` ;
}

console.log(precioFinal(100));



function mitad (mitadDeNumero) {
    return mitadDeNumero / 2 ;
}

console.log(mitad(8));




function diaSegunNumero (array, numero) {
    if (numero <0 || numero >7) {
        return "numero de dia invalido"
    }
    return array [numero]
}

let diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
let numeroDia = 5
let diaCorrespondiente = diaSegunNumero(diaSemana , numeroDia)

console.log("el dia que corresponde al número " + numeroDia, "es: " + diaCorrespondiente);




function suma (num1, num2) {
    return num1 + num2 ;
}

function resta (num1, num2) {
    return num1 - num2 ;
}

function multiplicacion (num1 , num2) {
    return num1 * num2 ;
}

function division (num1 , num2) {
    if (num2 !== 0) {
        return num1 / num2 ;
    }
    else {
        return "Error, no se puede dividir por 0"
    }
}

function calculadora(num1, num2, operacion) {
    if (operacion === "suma") {
        return suma(num1, num2);
    } else if (operacion === "resta") {
        return resta(num1, num2);
    } else if (operacion === "multiplicacion") {
        return multiplicacion(num1, num2);
    } else if (operacion === "division") {
        return division(num1, num2);
    } else {
        return "Operación no válida";
    }
}

console.log(calculadora(10,50,"suma"));
console.log(calculadora(150,50,"resta"));
console.log(calculadora(6,5,"multiplicacion"));
console.log(calculadora(2,0,"division"));




function siguiente(numero) {
    return numero + 1;
  }

function doble(numero) {
    return 2 * numero;
  }

function siguienteDelDoble(numero) {
    return siguiente(doble(numero));
  }

console.log(siguiente(3));
console.log(doble(20));
console.log(siguienteDelDoble(7));

function anterior (num) {
    return num - 1;
}

function triple (num) {
    return num * 3;
}

function anteriorDelTriple (num) {
    return anterior(triple(num))
}

console.log(triple(100));
console.log(anterior(9));
console.log(anteriorDelTriple(100));


