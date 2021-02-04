import {createStore, combineReducers} from 'redux';
import ProductsHbReducer from './reducers/ProductsHbReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from './reducers/CartReducer';
import ProductsActionReducer from './reducers/ProductsActionReducer';
import ProductsComicReducer from './reducers/ProductsComicReducer';
import  ProductsDetectiveReducer from './reducers/ProductsDetectiveReducer';
import  ProductsEducationalReducer from './reducers/ProductsEducationalReducer';
import  ProductsPoetryReducer from './reducers/ProductsPoetryReducer';
 const root = combineReducers({
     ProductsHbReducer,
     ProductsActionReducer,
     ProductsComicReducer,
     ProductsDetectiveReducer,
     ProductsEducationalReducer,
     ProductsPoetryReducer,
     CartReducer
 });

 const store = createStore(root,devToolsEnhancer());
 export default store;