import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------
| Crea un programa que le pregunte al usuario si el clima está nublado o
| soleado y dependiendo de su respuesta, dale un consejo sobre que podria 
| llevar antes de salir de casa
|
| Nota: asumiremos que las unicas posibles respuestas por parte del usuario
| serán "nublado" o "soleado"
|
| Pista: puedes utilizar condicionales y comparadores
|
|--------------------------------------------------------------------------
*/

// Tú código aquí

// ---
rl.close();
