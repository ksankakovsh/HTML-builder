const fs = require("fs/promises");
const path = require('path');
const pathField = path.join(__dirname);

const copyField = async () => {
  let fieldFrom = path.resolve(pathField, "files");
  let fieldTo = path.resolve(pathField, "files-copy");
  try {
    await fs.mkdir(fieldTo, { recursive: true });
  } catch {
    console.log("ошибочка вышла");
  }

  let filesToCopy = await fs.readdir(fieldFrom, {
    withFileTypes: true,
  });
  filesToCopy.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.resolve(__dirname, fieldFrom, file.name);
      fs.copyFile(filePath, path.resolve(fieldTo, file.name));
      console.log(`сейчас копируется ${file.name}`);
    }
  });
};

copyField();
