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
import {NavigationActions} from 'react-navigation';
import Api from '../utils/api';
import Icon from './icon';

class Register extends Component{
	static navigationOptions = () => {
	    return {
	      //title:'Sobre esta app',
	    
	     
	    }
    }

	state={
		txtBuscaRFC:""
	}

    personaEncontrada=async ()=>{
        if(this.state.txtBuscaRFC!=""){
			var persona = await Api.buscarPorRFC(this.state.txtBuscaRFC)
	        console.log(persona)
	        this.props.dispatch({
	          type: 'GET_PERSONA',
	          payload: {
	            persona: persona
	          }
	        })

			this.props.dispatch(
				NavigationActions.navigate({
					routeName:'Datos'
				})
			)
	    }

	}	

	handleChangeText=(text)=>{
		this.setState({
			txtBuscaRFC:text
		})
	}

	render(){
		return(
	      <SafeAreaView style={styles.container}>
	        <View>	          
	          <TextInput
	            style={styles.input}
	            placeholder="Escribe el RFC...✍🏻 "
	            placeholderTextColor="white"
	            onChangeText={this.handleChangeText}
	          />	          
	          <TouchableOpacity
	            onPress={this.personaEncontrada}
	            style={styles.button}
	          >
	            <Text style={styles.buttonLabel}>Buscar 🔎</Text>
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
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
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
    backgroundColor: '#99c84a',
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

export default connect(null)(Register);