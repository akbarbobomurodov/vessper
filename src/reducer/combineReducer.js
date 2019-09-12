import reducer from '../reducer/reducer';
import { combineReducers } from 'redux';

const bigReduser = combineReducers({
    post: reducer
})

export default bigReduser;
