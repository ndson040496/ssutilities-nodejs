const versionCompare = require('./version-compare');
const fs = require('fs');
const jwtDecode = require('jwt-decode');

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

function getUidFromRequest(req) {
    const jwt = req.header('x-apigateway-api-userinfo');
    return jwtDecode(jwt)['user_id'];
}

module.exports = {
    compareVersions: versionCompare,
    fileReader: {
        readPlainFile: readPlainFile,
        readJsonFile: readJsonFile
    },
    uidGetter: getUidFromRequest
}
