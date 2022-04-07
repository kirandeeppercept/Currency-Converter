import { CONVERT_CURRENCY, FETCH_RATES, FETCH_SYMBOLS, LOADING } from "../actions";

const initialState = {
    loading: false,
    symbols: null,
    rates: {},
    currency: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_RATES:
            return {
                ...state,
                loading: false,
                rates: action.payload
            };
        case CONVERT_CURRENCY:
            return {
                ...state,
                loading: false,
                currency: action.payload
            };
        case FETCH_SYMBOLS:
            return {
                ...state,
                loading: false,
                symbols: action.payload
            };
        default:
            return state;
    }
};