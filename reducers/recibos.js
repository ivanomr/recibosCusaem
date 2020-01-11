function recibos(state={},action){
	switch(action.type){
		case 'GET_RECIBOS':{
				return {...state,...action.payload}
		}
		default: 
				return state
	}
	
}

export default recibos;