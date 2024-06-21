function pediredad(edad) {
    if (edad >= 18) {
        mostrarCalculadora();
    } else {
        alert("Debes ser mayor de 18 años para acceder a la calculadora.");
    }
}

function mostrarCalculadora() {
    let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
    let numero1 = parseFloat(prompt("Ingresa un numero:"));
    let numero2 = parseFloat(prompt("Ingresa un segundo numero:"));
    
    let resultado;

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    alert("El resultado es: " + resultado);
}

let edad = parseInt(prompt("Ingresa tu edad:"));
pediredad(edad);