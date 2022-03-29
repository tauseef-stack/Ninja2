import { store } from "./store/store.js"; //entry point of redux
import { addCount } from "./store/action.js";
import { decCount } from "./store/action.js";
import { resetCount } from "./store/action.js";
console.log(store.getState()); //initial state

store.dispatch(addCount(3))
store.dispatch(addCount(3))
store.dispatch(decCount(1))
store.dispatch(resetCount())
console.log(store.getState());
