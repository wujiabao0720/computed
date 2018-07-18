import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducer from './reducers'
let store=createStore(reducer,applyMiddleware(Thunk));
if(process.env.NODE_ENV==="development"){
    window.store=store;
}
export default store;