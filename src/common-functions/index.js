const versionCompare = require('./version-compare');
const fs = require('fs');

async function readPlainFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    });
}

async function readJsonFile(file) {
    return new Promise(resolve => {
        readPlainFile(file).then(string => {
            return JSON.parse(string);
        }).catch(error => {
            resolve(null);
        })
    });
}

module.exports = {
    compareVersions: versionCompare,
    fileReader: {
        readPlainFile: readPlainFile,
        readJsonFile: readJsonFile
    }
}
