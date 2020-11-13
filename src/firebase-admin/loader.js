let admin = require('firebase-admin');
let isLoaded = false;

function loadFirebaseAdmin(key, projectName) {
    if (isLoaded) {
        return admin;
    }
    isLoaded = true;
    admin.initializeApp({
        credential: admin.credential.cert(key),
        databaseURL: `https://${projectName}.firebaseio.com`
    });
    return admin;
}

module.exports = loadFirebaseAdmin;
