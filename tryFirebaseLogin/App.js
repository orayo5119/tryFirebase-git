import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/input';
import {Button, SecButton} from './components/Button';

//initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCMM5uK9qKbvplF-6JMWqOzi866YalrmYY",
    authDomain: "first-project-a936d.firebaseapp.com",
    databaseURL: "https://first-project-a936d.firebaseio.com",
    projectId: "first-project-a936d",
    storageBucket: "first-project-a936d.appspot.com",
    messagingSenderId: "414258592837"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email:'',
      password:'',
      authenticating: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  };

  signUpUser = (email, password) => {

      try{
        if (this.state.password.length < 6) {
          alert("Please enter at least 6 characters")
          return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch(error){
        console.log(error.toString())
      }
  }
  
  loginUser = (email, password) => {
      try{
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            console.log (user)
          });
          this.setState({
            authenticating:true,
          })
        }
      catch(error){
        console.log(error.toString())
      }
  }

async loginWithFacebook(){
  const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync
  ('379839499457170', { permissions: ['public_profile']})

  if(type == 'success') {
    const credential = firebase.auth.FacebookAuthProvider.credential(token)

    firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) =>{
      console.log(error)
    })
  }
}
  
  //press button and run ActivityIndicator
    renderCurrentState() {
      if (this.state.authenticating) {
        return (
          <View style={styles.form}>
              <ActivityIndicator size="large"/>
          </View>
        )
      }
      return (
        <View style={styles.form}>
          <Input
            placeholder="Enter your email"
            label="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <Input
            placeholder="Enter your password"
            label="Password"
            secureTextEntry
            onChangeText={password => this.setState({password})}
            value={this.state.passwordl}
          />

          <Button onPress={() =>this.loginUser(this.state.email,this.state.password)}>Log In</Button>
          {/* <Button onPress={() => this.onPressSignIn()}>Log In</Button> */}


          <SecButton onPress={() => this.signUpUser(this.state.email,this.state.password)}>Sign Up</SecButton>

          <Button onPress={() => this.loginWithFacebook()}>Login with Facebook</Button>
      

        </View>
      )
    }

  render() {
      return (
        <View style={styles.container}>
          {this.renderCurrentState()}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    paddingHorizontal:20,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:'row'
  },
  form:{
    flex:1
  }
});
