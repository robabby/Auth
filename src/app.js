import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDR_SJC1CfwLfNIL0yY0dTlJrWxV2znNjo',
      authDomain: 'auth-9c3b4.firebaseapp.com',
      databaseURL: 'https://auth-9c3b4.firebaseio.com',
      projectId: 'auth-9c3b4',
      storageBucket: 'auth-9c3b4.appspot.com',
      messagingSenderId: '345287320414'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
