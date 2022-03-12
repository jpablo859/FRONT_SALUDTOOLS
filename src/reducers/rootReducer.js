import { combineReducers } from "redux";
import { tipoCitaReducer } from "./tipoCitaReducer";

export const rootReducer = combineReducers({
    tipoCita: tipoCitaReducer
})