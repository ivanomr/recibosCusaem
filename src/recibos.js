import React,{Component} from 'react';
import {
	View,
	Text,
	FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Api from '../utils/api';
import Layout from './recibos-list-layout';
import SeparadorLista from './separador-lista';
import ComponenteRecibo from './componente-recibo';
var RNFS = require('react-native-fs');
import Toast, {DURATION} from 'react-native-easy-toast'

class Recibos extends Component{

	componentDidMount= async () => {
			var recibos= await Api.recibos(this.props.usuario.user.token)
			
			this.props.dispatch({
	          type: 'GET_RECIBOS',
	          payload: {
	            recibos: recibos
	          }
	        })

			//console.log(this.props.recibos.recibos)
	}

	getPdf = async (ano,quincena)=> {
		var pdf=await Api.getPDF(ano,quincena,this.props.usuario.user.token)
	    console.log(pdf)
	    var path = RNFS.DocumentDirectoryPath+"/"+pdf.nomArchivo;
	    console.log(path)

	    RNFS.writeFile(path, pdf.bytes, 'base64')
	    .then((success) => {
	    	console.log(RNFS.DocumentDirectoryPath);
	       this.refs.toast.show('¡ PDF DESCARGADO !');
	    })
	    .catch((err) => {
	      console.log(err.message);	
	      this.refs.toast.show(err.message);
	    });
	}

	getXml = async (ano,quincena,folio)=> {
	    var xml=await Api.getXML(ano,quincena,folio,this.props.usuario.user.token)

	    console.log(xml)
	    var path = RNFS.DocumentDirectoryPath+"/"+xml.nomArchivo;
	    console.log(path)

	    RNFS.writeFile(path, xml.bytes, 'base64')
	    .then((success) => {
	    	console.log(RNFS.DocumentDirectoryPath);
	       this.refs.toast.show('¡ XML DESCARGADO !');
	    })
	    .catch((err) => {
	      console.log(err.message);	
	      this.refs.toast.show(err.message);
	    });
	}


	render(){
		return (
			<View>
			    <Layout 
				   titulo="TUS RECIBOS"
				>
				    <FlatList
						data={this.props.recibos.recibos}
						renderItem={({item}) => <ComponenteRecibo getPdf={this.getPdf} getXml={this.getXml} {...item} /> }
						ItemSeparatorComponent={()=><SeparadorLista/>}
						keyExtractor={(item, index) => index.toString()}
					/>
			    </Layout>
			     <Toast ref="toast"/>
			</View>
		)
	}
}

function mapStateToProps(state){
	return {
    	recibos:state.recibos,
    	usuario:state.user
    }
}

export default connect(mapStateToProps)(Recibos);