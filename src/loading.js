import React,{Component} from 'react';
import LoadingLayout from './splash';
import {connect} from 'react-redux';

class Login extends Component{
 	
 	componentDidMount(){
 		//console.log(this.props.user)
		if(this.props.user){
			this.props.navigation.navigate('App')
		}else{
			this.props.navigation.navigate('Login')
		}
 	}

	render(){
		return <LoadingLayout/>	
	}
}

function mapStateToProps(state){
    return {
    	user:state.user
    }
}

export default connect(mapStateToProps)(Login);