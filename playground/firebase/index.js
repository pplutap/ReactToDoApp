import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyABTp417CjhakTmpAKa3VwZsoumerCtiaQ",
    authDomain: "pawel-todo-app.firebaseapp.com",
    databaseURL: "https://pawel-todo-app.firebaseio.com",
    projectId: "pawel-todo-app",
    storageBucket: "pawel-todo-app.appspot.com",
    messagingSenderId: "417721990920"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
    app: {
        name: 'FirebaseTestApp',
        version: 0.1
    },
    isRunning: true,
    user: {
        name: 'Pawel',
        age: 27
    }
});

firebaseRef.on('value', (snapshot) => {
    console.log('Got value', snapshot.val());
});

firebaseRef.child('user').update({
    name: 'Andrew'
});

firebaseRef.update({'app/name': 'ToDoApp'});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
   console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Walk the dog'
});
todosRef.push({
    text: 'Do something'
});
