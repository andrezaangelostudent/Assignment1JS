//25W JavaScript Frameworks - 204
//Students: 
//Andreza Maria de Assis Angelo 
//Anizio Campos Pereira

const { readFile} = require('node:fs');

//non blocking 
//read file in txt format called Autumn
//the file is in the same folder where is the Js file
//if any error occur, it will be displayed in the console
  readFile('./Autumn.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});