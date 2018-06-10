import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

const config = {
  apiKey: "AIzaSyCD3dTgHGU2HuIwNwCygoQcmpuBt4-EH54",
  authDomain: "reactnative-otpapp.firebaseapp.com",
  databaseURL: "https://reactnative-otpapp.firebaseio.com",
  projectId: "reactnative-otpapp",
  storageBucket: "reactnative-otpapp.appspot.com",
  messagingSenderId: "497661108533"
};

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
