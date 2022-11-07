const fs = require('fs');
const { stdin, stdout, stderr } = process;


const writeToFile = async () => {
  const output = fs.createWriteStream('02-write-file/notes.txt', 'utf8');

  function question(question2) {
      process.stdout.write('Ваша імя?\n');
      process.stdin.on('data', data => {
      output.write(data);
      question2();
      
    });
  } 
  function question2() {
      
      process.stdout.write('Ваша прозвішча?\n');
      process.stdin.on('data', data => {
      output.write(data);
      process.exit();
      });
     
    
  } 
 question(question2);

}  
process.on('exit', code => {
  if (code === 0) {
      stdout.write('Усё добранька');
  } else {
      stderr.write('ёсць пытаннечкі');
  }
});
writeToFile()


