import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------  
| Crea un programa que simule un cajero automático. El programa debe:  
| 1. Mostrar un saldo inicial de 1000.  
| 2. Preguntar al usuario si desea "Depositar", "Retirar" o "Salir".  
| 3. Si elige "Depositar", solicitar el monto y sumarlo al saldo.  
| 4. Si elige "Retirar", solicitar el monto y verificar si es posible  
|    retirar (no debe ser mayor al saldo disponible).  
| 5. Si elige "Salir", finalizar el programa.  
| 6. Mostrar el saldo actualizado después de cada operación.  
|  
| Nota: Usa un bucle while para repetir el menú hasta que el usuario decida salir,  
| y utiliza estructuras condicionales para manejar las opciones.  
|--------------------------------------------------------------------------  
*/

// Tú código aquí

// ---
rl.close();
