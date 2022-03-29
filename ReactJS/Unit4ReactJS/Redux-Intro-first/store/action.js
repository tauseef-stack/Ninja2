import { ADD_COUNT } from "./actionTypes.js";
import { DEC_COUNT } from "./actionTypes.js";
import { RESET_COUNT } from "./actionTypes.js";
//Actions:
export const addCount = (payload) => {
    return {
        type: ADD_COUNT,
        payload: payload
    };
}

export const decCount = (payload) => {
    return {
        type: DEC_COUNT,
        payload: payload,
    }
}

export const resetCount = () => {
    return {
        type: RESET_COUNT,
    }
}