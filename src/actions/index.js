import axios from "axios";
export const LOADING = "LOADING";
export const FETCH_RATES = "FETCH_RATES";
export const FETCH_SYMBOLS = "FETCH_SYMBOLS";
export const CONVERT_CURRENCY = "CONVERT_CURRENCY";

const baseUrl = 'http://api.exchangeratesapi.io/v1';

export const fetchRates = () => async (dispatch, getState) => {
    dispatch({type: LOADING});

    const symbolResponse = await axios.get(`${baseUrl}/symbols?access_key=1be7e5ad22da5bd881542169f6eb252a`);
    dispatch({type: FETCH_SYMBOLS, payload: symbolResponse.data.symbols});

    const ratesResponse = await axios.get(`${baseUrl}/latest?access_key=1be7e5ad22da5bd881542169f6eb252a`);
    dispatch({type: FETCH_RATES, payload: ratesResponse.data.rates});

}

export const fetchCurrencyPrice = (data) => async (dispatch, getState) => {
    dispatch({type: LOADING});
    const response = await axios.get(`http://currencies.apps.grandtrunk.net/getrate/2022-04-07/${data.from}/${data.to}`);
    console.log(response.data);
    dispatch({type: CONVERT_CURRENCY, payload: response.data});
}