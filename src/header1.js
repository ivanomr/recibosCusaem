import React,{Component} from 'react';
import {View,Image,StyleSheet,Text,SafeAreaView} from 'react-native';


class Header extends Component{

	
	render(){
		return (
			<SafeAreaView>
				
			<View style={{flexDirection: 'row',justifyContent: 'space-between',backgroundColor:'#2c3e50'}}>
				<Image 
					source={require('../logo-headers.png')}
					style={styles.logo}
					/>

			</View>
			</SafeAreaView>
		)
	}
}



const styles= StyleSheet.create({
	logo:{
		width:130,
		height:60,
		resizeMode:'contain',
	},
	header:{
		backgroundColor:'#2c3e50'
	},
	textHeader:{
		color:"#fff",
		marginTop:15,
		marginRight:25,
		fontSize:19,
		fontFamily:"GloriaHallelujah"

	}
})

export default Header;