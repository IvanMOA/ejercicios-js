import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------
| Crea un programa que le pregunte al usuario su edad y después la imprima
| de manera "bonita"
|
| Ejemplo, si el usuario dice que su edad es 22, imprimiremos lo siguiente:
| Tienes 22 años
|
|--------------------------------------------------------------------------
*/

// Tú código aquí

// ---
rl.close();
