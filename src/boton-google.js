import React,{Component} from 'react';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';


class BotonGoogle extends Component{
	
	_signIn= async ()=>{
		var user=await GoogleSignin.signIn()
		console.log(user)
		this.props.iniciarSesion(user.accessToken,"GOOGLE")
	}

	async componentDidMount(){
	    GoogleSignin.configure({
	      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
	      webClientId:'144250373482-ip1pcp9fi1rtnmophei4onhsaq5p74p7.apps.googleusercontent.com',
	    }) 
	    await GoogleSignin.revokeAccess();
	    await GoogleSignin.signOut();
		
	}


	render(){
		return( 
		  <TouchableOpacity
            onPress={this._signIn}
            style={styles.button}
          >
          
            <Text style={styles.buttonLabel}>GOOGLE</Text>
          </TouchableOpacity>
	    )
	}


}
//esquivel consultorio 1

const styles = StyleSheet.create({
    buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'rgb(220, 53, 69);',
    borderRadius: 5,
  }
})

export default BotonGoogle;