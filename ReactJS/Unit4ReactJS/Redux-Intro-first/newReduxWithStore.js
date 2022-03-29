import { createStore } from "redux"; //replacess entire store constructor. //type ="module";
const ADD_COUNT = "ADD_COUNT";
const DEC_COUNT = "DEC_COUNT";
const RESET_COUNT = "RESET_COUNT";

//reducer:

const initState = { //for initial state
    count: 0,
    todos: [],
}

const counterReducer = ( state=initState ,action)=> { //initaially state is undefined so we are passing it to soe value, oterwise it will show some error.
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





//store:
// class Store{
//     constructor(reducer,initState) {
//         this.reducer = reducer;
//         this.state = initState;
//     }
    

//     getState() {
//         return this.state;
//     }

//     dispatch(action) {
//       this.state =   this.reducer(this.state,action); //calling reducer here.
//     }
//   }





//const store = new Store(reducerFunction, initState)
const store =  createStore(counterReducer) //v.imp takes only conbine of all single reducer function.
//Actions:
const addCount = (payload) => {
    return {
        type: ADD_COUNT,
        payload: payload
    };
}

const decCount = (payload) => {
    return {
        type: DEC_COUNT,
        payload: payload,
    }
}

const resetCount = () => {
    return {
        type: RESET_COUNT,
    }
}
//dispatch:
console.log("initialState", store.getState()) //constructing State.

store.dispatch(addCount(2)); //calling dispatch function to change the state.

console.log("finalState", store.getState());

store.dispatch(addCount(3));

console.log("newfinalState", store.getState());

store.dispatch({ type: "ADD_CO", payload: 3 });

console.log("newfinalState", store.getState());

store.dispatch(decCount(3));

console.log("newdecfinalState", store.getState());

store.dispatch(resetCount())

console.log("resetState", store.getState());








// dispatch({ type: "ADD_COUNT", payload: 1 });
// dispatch({ type: "DEC_COUNT", payload: 1 });