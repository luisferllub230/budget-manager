import { useState, Fragment } from 'react'
import Bills from './components/AddBills';
import GetBudget from './components/GetBudget';
import './index.css'

const App = () => {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, serShowQuestion] = useState(true);

  return (
    <Fragment>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 mt-5 mb-3 text-center text-white">
            <h1>Your week budget</h1>
          </div>
          <div className='col-12'>
            <div className="card px-4 py-4 w-75 mx-auto">

              {
                showQuestion

                  ?
                  (<div className='col-12'>
                    <GetBudget
                      setBudget={setBudget}
                      setRemaining={setRemaining}
                      serShowQuestion={serShowQuestion}
                    />
                  </div>)
                  :

                  (

                    <div className='row'>
                      <div className="col-12 col-md-6 p-0">
                        <Bills

                        />
                      </div>
                      <div className="col-12 col-md-6 p-0">
                        
                      </div>
                    </div>

                  )

              }
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
