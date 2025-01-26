import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------  
| Crea un programa que cuente cuántas veces aparece una letra específica  
| en una cadena de texto ingresada por el usuario.  
|  
| Ejemplo: Si la cadena es "javascript" y la letra es "a", el resultado debe ser 2.  
|  
| Nota: Usa un bucle for para recorrer la cadena y contar la letra.  
|--------------------------------------------------------------------------  
*/

// Tú código aquí

// ---
rl.close();
