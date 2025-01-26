import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------  
| Crea un programa que muestre una cuenta regresiva desde un número  
| ingresado por el usuario hasta 0.  
|  
| Ejemplo: Si el usuario ingresa 5, la salida esperada es:  
| 5, 4, 3, 2, 1, 0  
|  
| Nota: Usa un bucle while para realizar la cuenta regresiva.  
|--------------------------------------------------------------------------  
*/
// Tú código aquí

// ---
rl.close();
