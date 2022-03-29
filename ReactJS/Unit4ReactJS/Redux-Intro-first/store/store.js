import { createStore } from "redux";
import {counterReducer} from "./reducer.js";
export const store = createStore(counterReducer) //we dont need any console.log here.
