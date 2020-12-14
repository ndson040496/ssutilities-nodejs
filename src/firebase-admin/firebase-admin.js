let admin = require('firebase-admin');

class FirebaseAdmin {

    auth
    database
    storage

    initialize (key, projectName) {
        admin.initializeApp({
            credential: admin.credential.cert(key),
            databaseURL: `https://${projectName}.firebaseio.com`
        });
        this.auth = admin.auth();
        this.database = admin.database();
        this.storage = admin.storage();
    }
}

let instance = new FirebaseAdmin();

module.exports = instance;
