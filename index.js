const fs = require('fs');
const path = require('path');

function getFile(filePath) {
    const ext = path.extname(filePath);
    if (!ext) {
        filePath += '.yaml'; // add default extension
    }
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function combineFiles(filePaths, outputFile) {
    const promises = filePaths.map(getFile);
    return Promise.all(promises).then(fileContents => {
      const concatenatedContent = fileContents.join('\n---\n');
      fs.writeFile(outputFile, concatenatedContent, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Combined files saved to ${outputFile}`);
        }
      });
    });
  }

const order = ["namespace", "hello-service", "hello-deployment"]
const output = "hello-deploy.yaml"

combineFiles(order, output)