const fs = require('fs');
const path = require('path');

// const createFile = () => {
//   fs.writeFile(
//     path.join(__dirname, 'notes.txt'), ' ',
//     (err) => {
//       if (err) throw err;
//       console.log('Файл был создан');
//       writeToFile();
//     }
//   )
// }

const writeToFile = async () => {
  const output = fs.createWriteStream('02-write-file/notes.txt', 'utf8');
  let questionOne = () => {
    process.stdout.write('Как тебя зовут?\n');
    process.stdin.on('data', data => {
    output.write(data);
    process.exit();
  });
  } 

 questionOne();
//  let questionTwo = () => {
//   process.stdout.write('Как тебя зовут?\n');
//   process.stdin.on('data', data => {
//   output.write(data);
//   process.exit();
// });
// } 

 
}

writeToFile()


