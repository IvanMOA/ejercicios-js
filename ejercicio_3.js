import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => rl.question(question)
// ---

/*
|--------------------------------------------------------------------------  
| Crea un programa que reciba una calificación (0-100) almacenada en una variable  
| e imprima la letra correspondiente según la siguiente escala:  
|  
| - 90-100: "A"  
| - 80-89: "B"  
| - 70-79: "C"  
| - 60-69: "D"  
| - Menos de 60: "F"  
|  
| Nota: Los Ifs se pueden encadenar N veces, permitiendonos poner estructuras
| como estas:
|
| if( ){
|    ...
| } else if(){
|    ...
| } else if(){
|    ...
| } else {
|    ...
| }
|
|--------------------------------------------------------------------------  
*/

// Tú código aquí

// ---
rl.close();
