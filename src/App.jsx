import { useState, Fragment } from 'react'
import GetBudget from './components/GetBudget';
import './index.css'

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 mt-5 mb-3 text-center text-white">
            <h1>Your week budget</h1>
          </div>
          <div className='col-12'>
            <GetBudget />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
