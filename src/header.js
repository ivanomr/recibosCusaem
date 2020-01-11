import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
} from 'react-native';

function Header(props){
	return (
		<View>
			<SafeAreaView style={styles.statusBar}>
			    <View style={styles.container} >
			    	<Image
				    	source={require('../logo-headers.png')}
				    	style={styles.logo}
			        />
			        <View style={styles.right} >
			    		{props.children}
			        </View>
			    </View>
			    
			</SafeAreaView>
		</View>
	)
}

const styles=StyleSheet.create({
	logo:{
		width:130,
		height:60,
		resizeMode:'contain',
	},
	statusBar:{
		
	},
	container:{
		paddingVertical:5,
		paddingHorizontal:1,
		flexDirection:'row',
		backgroundColor:'#2c3e50'
	},
	right:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-end'
	}
})

export default Header;