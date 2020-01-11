import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Api from '../utils/api';
import Icon from './icon';


class Login extends Component {
  static navigationOptions = () => {
    return {
      //title:'Sobre esta app',
      tabBarIcon: <Icon icon="🚪" />,
     
    }
  }
  
  _signIn= async ()=>{
      var user=await GoogleSignin.signIn()
      debugger
     console.log(user)
      var usu={
        token:user.accessToken, 
        prov:'GOOGLE'
      }
      
      var userIdentified = await Api.IniciarSesion(usu,'Login')

      console.log(userIdentified)
      this.props.dispatch({
          type: 'SET_USER',
          payload: {
            user: userIdentified
          }
        })
      this.props.navigation.navigate('Loading');               
   }



   async componentDidMount(){

    await GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId:'144250373482-ip1pcp9fi1rtnmophei4onhsaq5p74p7.apps.googleusercontent.com',
    })                
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();


  }

//rosa maria reg 0 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../logo-headers.png')}
            style={styles.logo}
          />

          <TouchableOpacity
            onPress={this._signIn}
            style={styles.button}
          >
          
            <Text style={styles.buttonLabel}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: 'rgb(220, 53, 69);',
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default connect(null)(Login)