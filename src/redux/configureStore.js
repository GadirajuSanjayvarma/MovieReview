import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import HomeResults from './Homereducer';
import Results from './Searchreducer';

export const ConfigureStore=()=>{

    const store=createStore(combineReducers({
        searchresults:Results,
        homeresults:HomeResults,

    }),applyMiddleware(thunk));
    return store;


};

