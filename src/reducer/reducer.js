import {INCREMENTTYPE, DECREMENTTYPE} from '../actions/action';
import axios from 'axios';


const initialState={
    counter:2,
    type:true  
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT": {
            return {
                counter:initialState.counter+1,
                type:true
            }
            break;
        }
        case "DECREMENT": {
            return {
                counter:initialState.counter - 1,
                type:false
            }
            break;
        }
    }

    return state;
}

export default reducer;