let admin = require('firebase-admin');

class FirebaseAdmin {

    auth
    database
    firestore
    storage
    messaging
    remoteConfig
    machineLearning
    rawAdmin

    initialize (key, projectName) {
        admin.initializeApp({
            credential: admin.credential.cert(key),
            databaseURL: `https://${projectName}.firebaseio.com`
        });
        this.auth = admin.auth();
        this.database = admin.database();
        this.firestore = admin.firestore();
        this.storage = admin.storage();
        this.messaging = admin.messaging();
        this.remoteConfig = admin.remoteConfig();
        this.machineLearning = admin.machineLearning();
        this.rawAdmin = admin;
    }
}

let instance = new FirebaseAdmin();

module.exports = instance;
