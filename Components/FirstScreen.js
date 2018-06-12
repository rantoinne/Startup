// Author:      Ravi Chandra Asthana
// CreatedOn:   9 June 2018
// CompletedBy: 10 June 2018

// import necessary modules..packages

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput } from 'react-native';
import { Font } from 'expo';
import * as firebase from 'firebase';

// Component Structure

export default class FirstScreen extends React.Component {

  // Navigation Header Styling

  static navigationOptions = {
    title: 'SignUp',
    headerStyle: {
      backgroundColor: '#eb4d4b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'monospace'
    },
  };

  constructor(props){
    super(props);
    this.state = {
      emailId: '',
      password: '',
      happy: 'myself',
      fontLoaded: false
    };
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyBXh6nMYDlyZQ_4EcRjDcoqNIaAoi98Qd4",
      authDomain: "startup-78bc1.firebaseapp.com",
      databaseURL: "https://startup-78bc1.firebaseio.com",
      projectId: "startup-78bc1",
      storageBucket: "startup-78bc1.appspot.com",
      messagingSenderId: "159798378316"
    };
    firebase.initializeApp(config);

    Font.loadAsync({
      'BerkshireSwash-Regular': require('./BerkshireSwash-Regular.ttf'),
      'Tangerine-Bold' : require('./Tangerine-Bold.ttf'),
      'Cinzel-Bold': require('./Cinzel-Bold.ttf'),
      'Orbitron' : require( './Orbitron-Bold.ttf' ),
      'BlackHanSans': require( './BlackHanSans-Regular.ttf' ),
    }).then(() => {
      this.setState({fontLoaded: true})
    });

  }

  signUpHandler = (email, password) => {

    try {
      if(this.state.password.length < 6) {
        alert( "Please Enter password of atleast 7 characters" )
        return ;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
      alert("Account created successfully!")

      }

    catch (error) {
      console.log(error.toString());
    }
  }

  loginHandler = (email, password) => {

  try {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() =>{
        this.props.navigation.navigate('SecondScreen', {name: this.state.happy});
  })
  }

  catch (error) {
  console.log(error.toString());
}

  }

  ComponentWillUnMount() {
    this.setState({fontLoaded: false});
  }

render () {
  return (
     <ImageBackground source= {require('./bg.jpg')} style= {styles.container}>

        <View style= {styles.innerContainer}>

          <Text style= {styles.heading, this.state.fontLoaded &&
             { fontFamily: 'Cinzel-Bold', fontSize: 20, color: '#130f40', alignSelf: 'center'}}>Welcome..</Text>

          <TextInput placeholder="Enter your Email Id.."
          style= {styles.emailInput} onChangeText= {(text) => this.setState({emailId: text})}
          underlineColorAndroid={'transparent'}>
          </TextInput>

          <TextInput placeholder="Enter your Password.."
          style= {styles.passwordInput} onChangeText= {(text) => this.setState({password: text})}
          underlineColorAndroid={'transparent'} secureTextEntry= {true}>
          </TextInput>

          <TouchableOpacity style ={styles.loginButton} onPress= {() => this.signUpHandler(this.state.emailId, this.state.password)}>
          <Text style= {styles.textp, this.state.fontLoaded &&
             { fontFamily: 'Cinzel-Bold', fontSize: 20, color: '#130f40', alignSelf: 'center'}}>SignUp</Text>
          </TouchableOpacity>

          <TouchableOpacity style ={styles.loginButton2} onPress= {() => this.loginHandler(this.state.emailId, this.state.password)}>
          <Text style= {styles.texti, this.state.fontLoaded &&
             { fontFamily: 'BerkshireSwash-Regular', fontSize: 20, color: '#130f40', alignSelf: 'center'}}>Login </Text>
          </TouchableOpacity>

        </View>


    </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    alignSelf: 'center'
  },

  innerContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: '#81ecec',
    shadowColor: 'white',
    shadowOffset: { width: 40, height: 40 },
    shadowOpacity: 1.0,
    shadowRadius: 2
  },

  emailInput: {
    padding: 5,
    margin: 5,
    borderColor: 'red',
    borderRadius: 8,
    backgroundColor: 'white'
  },

  passwordInput:{
      padding: 5,
      margin: 5,
      backgroundColor: 'white',
      borderColor: 'red',
      borderRadius: 8
  },

  loginButton: {
    padding: 10,
    margin: 10,
    width: window.width,
    borderRadius: 30,
    backgroundColor: '#badc58',
    justifyContent: 'center'
  },

    loginButton2: {
      padding: 10,
      margin: 10,
      width: window.width,
      borderRadius: 30,
      backgroundColor: '#ff7675',
      justifyContent: 'center'
    },

  texti: {
    alignSelf: 'center',
  },

  textp: {
    alignSelf: 'center',
  },

});
