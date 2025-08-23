'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positivo = 0
    let negativo = 0
    let zero = 0
    for(let i = 0;i < arr.length; i++){
    if(arr[i] > 0){positivo++}
    if(arr[i] < 0){negativo++}
    if(arr[i] === 0){zero++}}
    
 let total = arr.length;
 let proporcaopositivos = (positivo / total).toFixed(6); //toFixed para limitar o numero de casas decimais
 let proporcaonegativos = (negativo / total).toFixed(6);
 let proporcaozeros = (zero / total).toFixed(6);
 
 console.log(proporcaopositivos); 
 console.log(proporcaonegativos);
 console.log(proporcaozeros);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
