const { readdir } = require('fs/promises');
const { stat } = require('fs');   
const path = require('path');
const folderPath = path.resolve(__dirname, 'secret-folder');
async function fileReading() {
    const allFiles = await readdir(folderPath, {withFileTypes: true});
    for (const file of allFiles) {
        if (file.isDirectory()) { continue;}
        let extantionFile = path.extname(file.name);
        let nameFile = file.name.slice(0, file.name.length - extantionFile.length);
        const pathFile = path.join(folderPath, file.name)
        stat(pathFile, (error, stats) => {
            let sizeFile = stats.size;
            console.log(`${nameFile} - ${extantionFile.slice(1)} - ${sizeFile}b`);
        });
    }
}

fileReading()