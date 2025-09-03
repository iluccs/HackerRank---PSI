'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {

    let hour = parseInt(s.slice(0, 2), 10);
    const minutesSeconds = s.slice(2, 8);
    const period = s.slice(8, 10);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0; //
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
    }


    return `${hour.toString().padStart(2, '0')}${minutesSeconds}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
