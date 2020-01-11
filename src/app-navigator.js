import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator,
	createDrawerNavigator
} from 'react-navigation';
import Login from './login';
import Loading from './loading';
import Register from './register';
import Header from './header';
import Recibos from './recibos';
import Icon  from './icon';
import React from 'react';
import ModalDatosPersona from './modal-datos-empleado';
import DrawerComponet from './drawer';

const Main = createStackNavigator(
	{
		Home: Recibos
	},
	{
		navigationOptions:{
			header: Header
		}
	}
)

const WithModal=createStackNavigator(
	{
		 Main:{
			screen:Register
		 },
		 Datos:ModalDatosPersona
	},
	{  
		mode:'modal',
		headerMode:'none',
		cardStyle:{
			backgroundColor:'white'
		},
		navigationOptions:{
			gesturesEnabled:true
		}
	}
)


const TabNavigator = createBottomTabNavigator(
	{
		Ingresar:{screen:Login},
		Registrate:{
			screen:WithModal,
			navigationOptions:{
				tabBarIcon: <Icon icon={"✍🏻"} />,
			}
		},
		
		
	},
	{
		tabBarOptions:{
			activeTintColor:'white',
			activeBackgroundColor:'#6c8681'
		}
	}
)

const Drawer = createDrawerNavigator(
{	
	Home: {
		screen: Main,
		navigationOptions:{
			title:'Tus recibos',
			drawerIcon: <Icon icon={"📜"}/>
		}
	}
	
},
	{
		drawerWidth:200,
		drawerBackgroundColor:'#f6f6f6',
		contentComponent:  DrawerComponet,
		contentOptions:{
			activeBackgroundColor:'#6c8681',
			activeTintColor:'#fff',
			inactiveTintColor:'#828282',
			inactiveBackgroundColor:'white',
			itemStyle:{
				borderBottomWidth:.5,
				borderBottomColor:'rgba(0,0,0,.5)'
			},
			labelStyle:{
				marginHorizontal:0
			},
			iconContainerStyle:{
				marginHorizontal:5
			}
		}
	}

)

const SwitchNavigator=createSwitchNavigator(
	{
		App:Drawer,
		Login:TabNavigator,
		Loading:Loading,
	},
	{
		initialRouteName:'Loading',
	}
)

export default SwitchNavigator;