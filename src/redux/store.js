import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dictionaryReducer from './reducer'; 


const rootReducer = combineReducers({
  dictionary: dictionaryReducer, 
 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
