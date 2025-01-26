import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------  
| Crea un programa que solicite números al usuario hasta que ingrese  
| el número 0. Al final, debe mostrar la suma de todos los números ingresados.  
|  
| Ejemplo: Si el usuario ingresa 5, 3 y 0, la salida esperada es:  
| "La suma total es: 8"  
|  
| Nota: Usa un bucle while para solicitar los números y sumar.  
|--------------------------------------------------------------------------  
*/

// Tú código aquí

// ---
rl.close();
