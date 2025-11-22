import { combineReducers } from "redux";
import { recordReducer } from "./record";

const rootReducer = combineReducers({
  records: recordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
