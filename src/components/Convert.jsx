import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrencyPrice } from '../actions';

const Convert = () => {
  const [conversion, setConversion] = useState('');
  const [inputData, setInputData] = useState({
    from: null,
    to: null,
    amount: 1,
  })

  const state = useSelector(state => state.currency);
  const dispatch = useDispatch();

  const covertCurrency = async () =>{
   dispatch(fetchCurrencyPrice(inputData));
  }

  const currentValUpdate = (e) => {
    const val = e.target.value.split(" ");
    setInputData({...inputData, from: val[1], to:val[3], amount:val[0]})
  }

  useEffect(() => {
    if(!state.currency) return
    const data = inputData.amount * state.currency;
    setConversion(data);
  },[state.currency, inputData.amount])

  return (
    <div className='curreConvtSect'>
        <div className='container'>
          <div className="row">
          <div className='d-flex justify-content-between align-items-center'> 
              <h2 className='text-center mt-5 mb-5'><span className="badge bg-secondary">Currency Converter</span></h2>
              <Link to="/" className='btn btn-secondary'>Fresh Rate List</Link>
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="15 INR to USD" aria-label="Currency Converter" aria-describedby="button-addon2" onChange={(e)=>currentValUpdate(e)}/>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(e)=>covertCurrency()}>Convert</button>
            </div>
          </div>
          {
          conversion
          &&
          (
            <div className='mt-5 text-center'><h4>{inputData.from} to {inputData.to} Currency : <span className="badge bg-secondary">{parseFloat(conversion).toFixed(2)}</span></h4></div>
          )
        }
        </div>
        
    </div>
  )
}

export default Convert