import React,{Component} from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	Button,
} from 'react-native';
import {DrawerItems} from 'react-navigation';
import { connect } from 'react-redux';

class Drawer extends Component {
	
	salir=()=>{
		 this.props.dispatch({
	      type:'REMOVE_USER',

	    })
	    this.props.navigation.navigate('Loading');
	}

	nada = () => {
      
	}

    render(){
    	var nombre = this.props.user.user.nombre
		return(
			<ScrollView>
				
				<View style={styles.container} >
					<Image
						source={require('../logo-headers.png')}
						style={styles.logo}
					/>
				</View>	
				<Button onPress={this.nada} color="#2c3e50" title={'👮🏻 ¡ HOLA '+nombre+' !'} />
				<Button onPress={this.salir} title={'👈🏼🚪 Salir'} />
			</ScrollView>
		)
	}
}

const styles=StyleSheet.create({
	logo:{
		width:130,
		height:60,
		resizeMode:'contain',
		marginVertical:5,
		marginLeft:10
	},
	container:{
		backgroundColor:'#2c3e50'
	}
})

function mapStateToProps(state){
	return {
    	user:state.user
    }
}


export default connect(mapStateToProps)(Drawer);