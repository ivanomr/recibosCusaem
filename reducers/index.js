import { 
	combineReducers
} from 'redux';

import navigation from './navigation';
import recibos from './recibos';
import user from './user';
import persona from './persona';

const reducer=combineReducers({
	recibos,
	navigation,
	user,
	persona
})


export default reducer;