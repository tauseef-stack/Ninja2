import { ADD_COUNT } from "./actionTypes.js";
import { DEC_COUNT } from "./actionTypes.js";
import { RESET_COUNT } from "./actionTypes.js";
const initState = { //for initial state
    count: 0,
    todos: [],
}
 
export const counterReducer = (state = initState, action) => { //initaially state is undefined so we are passing it to soe value, oterwise it will show some error.
    //console.log(state, action);
    switch(action.type)
    {
        case ADD_COUNT:
            return { //v.imp can be written anything.
                ...state, //retaining previous state.
               count :  state.count+action.payload, //making change in state...v.imp. overiding count.
            }
            case DEC_COUNT:
                return { //v.imp can be written anything.
                    ...state, //retaining previous state.
                   count :  state.count-action.payload, //making change in state...v.imp. overiding count.
            }
        case RESET_COUNT:
            return {
                ...state,
                count:0, //donot required payload here.
            }
        
        default:
            return state;
    }
   // return state;
 }