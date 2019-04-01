import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyBuACzE0RHHMxbYziUjqBWjD5pKhqbJzlA",
    authDomain: "react-firebase-41e41.firebaseapp.com",
    databaseURL: "https://react-firebase-41e41.firebaseio.com",
    projectId: "react-firebase-41e41",
    storageBucket: "react-firebase-41e41.appspot.com",
    messagingSenderId: "654955754598"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;
