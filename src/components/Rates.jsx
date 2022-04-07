import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRates } from '../actions';

const  Rates = () => {
  const state = useSelector(state => state.currency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

 
    return (
      <div className='rates-sect'>
        <div className='container'>
          <div className="row">
            <div className='d-flex justify-content-between align-items-center'> 
              <h2 className='text-center mt-5 mb-5'><span className="badge bg-secondary">Daily Base Euro Curreny Rates</span></h2>
              <Link to="/convert" className='btn btn-success'>Convert Your Currency</Link>
            </div>
              <table className='table'>
                <thead className='bg-secondary text-white'>
                  <tr>
                    <th>Country Code</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  { state.loading === true &&
                    <tr><td colSpan={2} className="text-center">Loading Data.....</td></tr>
                  }
                  { state.loading === false && state.symbols &&
                      Object.entries(state.symbols).map((item, index)=>{
                        return (
                          <tr key={index}>
                            <td>{item[1]} ({item[0]})</td>
                            <td>{parseFloat(state.rates[item[0]]).toFixed(2)}</td>
                          </tr>
                        )
                      })
                      
                  }   
                </tbody>
              </table>
          </div>
        </div>
      </div>
    )
      

}

export default Rates