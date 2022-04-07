import { combineReducers } from "redux";
import CurrencyReducer from "./currencyReducer";

const rootReducer = combineReducers({
    currency: CurrencyReducer,
});

export default rootReducer;