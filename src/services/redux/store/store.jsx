import {createStore} from 'redux';
import drawerStatus from '../reducer/reducer';

const store=createStore(drawerStatus);

export default store;