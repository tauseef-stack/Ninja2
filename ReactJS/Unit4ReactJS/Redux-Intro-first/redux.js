   /*       TOTAL THINKS HAPPENING UNDER THE HOD OF REDUX      REMEMBER */
//to avoid spelling mistakes in swithcase string check. we need to pass varible as string.
//actions type:
const ADD_COUNT = "ADD_COUNT";
const DEC_COUNT = "DEC_COUNT";
const RESET_COUNT = "RESET_COUNT";

//reducer:
const reducerFunction= (state,action)=> {
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
class Store{
    constructor(reducer,initState) {
        this.reducer = reducer;
        this.state = initState;
    }
    

    getState() {
        return this.state;
    }

    dispatch(action) {
      this.state =   this.reducer(this.state,action); //calling reducer here.
    }
  }

const initState = {
    count: 0,
    todos: [],
}



const store = new Store(reducerFunction, initState)

//dispatch:
console.log("initialState", store.getState()) //constructing State.

store.dispatch({ type: ADD_COUNT, payload: 2 }); //calling dispatch function to change the state.

console.log("finalState", store.getState());

store.dispatch({ type: ADD_COUNT, payload: 3 });

console.log("newfinalState", store.getState());

store.dispatch({ type: "ADD_CO", payload: 3 });

console.log("newfinalState", store.getState());

store.dispatch({ type: DEC_COUNT, payload: 3 });

console.log("newdecfinalState", store.getState());

store.dispatch({type:RESET_COUNT})

console.log("resetState", store.getState());








// dispatch({ type: "ADD_COUNT", payload: 1 });
// dispatch({ type: "DEC_COUNT", payload: 1 });