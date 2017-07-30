import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyABTp417CjhakTmpAKa3VwZsoumerCtiaQ",
        authDomain: "pawel-todo-app.firebaseapp.com",
        databaseURL: "https://pawel-todo-app.firebaseio.com",
        projectId: "pawel-todo-app",
        storageBucket: "pawel-todo-app.appspot.com",
        messagingSenderId: "417721990920"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;