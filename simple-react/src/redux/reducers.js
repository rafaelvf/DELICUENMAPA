import {combineReducers} from "redux";
import {reducer} from "./reducer";

const reducers = combineReducers({
    allRobos: reducer,
})

export default reducers;