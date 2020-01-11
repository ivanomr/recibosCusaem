import React,{Component} from 'react';
import {
	FlatList,
	Text,
} from 'react-native';
import Layout from './recibos-list-layout';
import SeparadorLista from './separador-lista';
import ComponenteRecibo from './componente-recibo';

class RecibosList extends Component{
	render(){
		return (
			<Layout 
			   titulo="TUS RECIBOS"
			>
				<FlatList
					data={this.props.recibos}
					renderItem={({item}) => <ComponenteRecibo {...item} /> }
					ItemSeparatorComponent={()=><SeparadorLista/>}
					keyExtractor={(item, index) => index.toString()}
				/>				
			</Layout>
		)
	}
}

export default RecibosList;