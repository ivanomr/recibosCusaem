import React,{Component} from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import BotonGoogle from './boton-google';
import Api from '../utils/api';

class ModalDatosPersona extends Component{
	state={
		txtRespuests:"",
		txtMsgAlerta:""
	}

	handleChangeText=(text)=>{
		this.setState({
			txtRespuesta:text,			
		})
	}   


    iniciarSesion= async (token,prov)=>{
    	 var persona=this.props.persona.persona
         var user={
		 	nombre:persona.persona.ape_pat+" "+persona.persona.ape_mat+" "+persona.persona.nombre,
		 	corp:persona.persona.corp,
		 	mat:persona.persona.cve_empl,
		 	token:token,
		 	respuesta:this.state.txtRespuesta,
		 	numPregunta:persona.numPregunta,
		 	quincena:persona.quincena,
		 	prov:prov			
		 } 
		 var userIdentified=await Api.IniciarSesion(user,"Create");
		 
		 if(userIdentified.token){
			this.props.dispatch({
	          type: 'SET_USER',
	          payload: {
	            user: userIdentified
	          }
	        })

	        this.props.navigation.navigate('Loading');
			
		 }else{
			this.setState({txtMsgAlerta:userIdentified.error})
			console.log(this.state.txtMsgAlerta)
		 }		
	}



   
	render (){
		var persona=this.props.persona.persona
		if(persona.persona.nombre.includes("::")){
					var tipoMensaje=persona.persona.nombre.split("::")[0]
			    	return <View style={styles.containerMensajes}><Text style={{color:getAlerta(tipoMensaje)}}>{persona.persona.nombre}</Text></View> 
	    }	
		return (
			    		

				<View style={styles.container}>

					<Text style={styles.txtDescriptivo}>ENCONTRADO ✔️</Text>
					<Text style={
						{
							color:"rgb(40, 167, 69)",
							fontSize:30,
							textAlign:'center',
						}
					}>{persona.persona.nombre+" "+persona.persona.ape_mat+" "+persona.persona.ape_pat}</Text>
					<Text style={{color:"rgb(0, 119, 204)",fontSize:20}}>{persona.persona.rfc}</Text>				
					<Text  style={styles.txtDescriptivo}>Responde la pregunta sobre tu recibo de la quincena</Text>
					<Text style={
						{
							backgroundColor: '#000',
							color:'#fff',
							borderWidth: 1,
							borderRadius: 12,
							padding: 8,
							marginTop:20,
	    					marginBottom:20,
	    					fontSize:20,
	    					fontWeight: 'bold',
						}
					}>{persona.quincena}</Text>
					<Text  style={
						{
							color:"rgb(220, 53, 69)",
							fontSize:25,
							textAlign: 'center',
						}
					}>{persona.pregunta}</Text>
					<TextInput		           
			            placeholder="Escribe aquí la respuesta...✍🏻"
			            onChangeText={this.handleChangeText}            
			        />
					<BotonGoogle iniciarSesion={this.iniciarSesion}/>

					<Text style={{color:getAlerta(this.state.txtMsgAlerta),marginTop:25,textAlign: 'center',fontSize:12}}>{this.state.txtMsgAlerta}</Text>
				</View>
			
		)
	}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor: '#fff',
    marginTop:30,
    marginBottom:30
  },
  containerMensajes: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    marginTop:30,
    marginBottom:30

  },
txtDescriptivo:{
		fontSize:25,
		textAlign: 'center',
		marginTop:6
  }
})

function mapStateToProps(state){
    return {
    	persona:state.persona
    }
}

function getAlerta(tipo){
		var alertas={}
		alertas["Alerta"]="#cdcc13"
		alertas["Existente"]="#31a611"
		alertas["Error"]="#d52909"
		alertas["Inexistente"]="#1368cd"

        
        return alertas[tipo]
}


export default connect(mapStateToProps)(ModalDatosPersona);

