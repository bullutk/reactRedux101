// ************************REDUCERS************************

// this is our master reducers file. it doesnt manage any particular piece of state
// it manages/contains all the other reducerts (which contain a piece of state)

//get the combine reducers method from redux
import { combineReducers } from 'redux';
// import each reducer HERE
import StudentReducer from './StudentReducer';
import StudentReducer2 from './StudentReducer2';
const rootReducer = combineReducers({
	// inside here we pass each reducer as a key or property
	// each property/key will be avaiable as state.key
	students: StudentReducer,
	students2: StudentReducer2

})

export default rootReducer;