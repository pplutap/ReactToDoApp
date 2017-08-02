import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: "pawel-todo-app",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: "417721990920"
    };
    console.log("API_KEY", config.databaseURL);
    firebase.initializeApp(config);
} catch (e) {
    console.log(e.message);
}

export var githubProdiver = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;