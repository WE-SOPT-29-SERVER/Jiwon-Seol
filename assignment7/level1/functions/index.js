const admin = require('firebase-admin');
const serviceAccount = require('./wesopt29-79f63-firebase-adminsdk-jwk3j-da1ed8b929');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};
