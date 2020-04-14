
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBwz5_KTI909_zmvZeuDWrnN2Kot51UK2k",
    authDomain: "my-application-ca7ec.firebaseapp.com",
    databaseURL: "https://my-application-ca7ec.firebaseio.com",
    projectId: "my-application-ca7ec",
    storageBucket: "my-application-ca7ec.appspot.com",
    messagingSenderId: "620041508526",
    
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;