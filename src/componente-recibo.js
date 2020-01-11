import React,{Component} from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Api from '../utils/api';

class ComponenteRecibo extends Component{
	
	getPdf=()=>{
		this.props.getPdf(this.props.ano,this.props.quincena)
	}

	getXml=()=>{
		this.props.getXml(this.props.ano,this.props.quincena,this.props.folio)
	}

	render(){
		return (
			
			<View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
			   
			   <TouchableOpacity onPress={this.getPdf} >
			   	<Image style={styles.imgPDF} source={require('../assets/pdf_download.png')} />
			   </TouchableOpacity>
				
			   <Text style={styles.textoQuincena}>{"👈🏼  Quincena "+this.props.quincena+"  👉🏻"}</Text>
				
			   <TouchableOpacity onPress={this.getXml}>
				<Image style={styles.imgXML} source={require('../assets/xml_download.png')} />	
			   </TouchableOpacity>

				
			    
			</View>
		)
    }
}

const styles=StyleSheet.create({
	imgPDF:{
		width:60,
		height:60,
		marginLeft:20
	},

    imgXML:{
		width:60,
		height:60,
		marginRight:20

	},
	textoQuincena:{
		marginTop:15,
		fontWeight:'bold',
		fontSize:20
	}

})



export default ComponenteRecibo;