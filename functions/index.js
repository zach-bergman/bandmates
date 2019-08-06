const functions = require('firebase-functions');

const app = require('express')();

const { getAllScreams } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

// scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

 // users routes
app.post('/signup', signup);
app.post('/login', login);


 exports.api = functions.https.onRequest(app);
