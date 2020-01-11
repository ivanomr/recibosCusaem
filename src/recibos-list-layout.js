import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

function RecibosListLayout(props){
	return (
		<View style={styles.contenedor}>
			<Text style={styles.titulo}>{props.titulo}</Text>
			{props.children}
		</View>
	)
}

const styles=StyleSheet.create({
	contenedor:{
		
	},
	titulo:{
		color:'#4c4c4c',
		fontSize:25,
		marginBottom:15,
		marginTop:15,
		textAlign:'center',
		fontWeight:'bold',

	}
})

export default RecibosListLayout;