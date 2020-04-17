
import firebase from 'firebase';
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBwz5_KTI909_zmvZeuDWrnN2Kot51UK2k",
    authDomain: "my-application-ca7ec.firebaseapp.com",
    databaseURL: "https://my-application-ca7ec.firebaseio.com",
    projectId: "my-application-ca7ec",
    storageBucket: "my-application-ca7ec.appspot.com",
    messagingSenderId: "620041508526",
    
};

const firebaseConf = firebase.initializeApp(config);
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { auth, providers };
export default firebaseConf;