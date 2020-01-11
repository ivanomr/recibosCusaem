import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
function SeparadorLista(props){
	return (
		<View style={styles.separador}>
			
		</View>
	)
}

const styles= StyleSheet.create({
	separador:{
	
		borderTopWidth:0.5,
		marginBottom:8,
		marginTop:8,
	}
})

export default SeparadorLista;