import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/input';
import {Button} from './components/Button';

export default class App extends React.Component {

  state = {
    email:'',
    password:'',
    authenticating: false,
  }

  componentWillMount() {
    const firebaseConfig = {
      apikey:'AIzaSyCMM5uK9qKbvplF-6JMWqOzi866YalrmYY',
      authDomain:'first-project-a936d.firebaseapp.com',
    }

  
    firebase.initializeApp(firebaseConfig)
  }

  onPressSignIn(){
    this.setState({
      authenticating:true,
    })
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

          <Button onPress={() => this.onPressSignIn()}>Log In</Button>

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
    paddingTop: 20,
    paddingHorizontal:20,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:'row'
  },
  form:{
    flex:1
  }
});
