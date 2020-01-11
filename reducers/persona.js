function persona(state={},action){
	switch(action.type){
		case 'GET_PERSONA':{
				return {...state,...action.payload}
		}
		default: 
				return state
	}
	
}

export default persona;