import { useState, Fragment, useEffect } from 'react'
import Bills from './components/AddBills';
import GetBudget from './components/GetBudget';
import ShowBills from './components/ShowBills';
import './index.css'

const App = () => {

  //local storage
  let budgetLocalStorage = JSON.parse(localStorage.getItem('budget'))
  !budgetLocalStorage ? budgetLocalStorage = 0 : null;

  //use state
  const [showQuestion, serShowQuestion] =  useState(true);
  const [budget, setBudget] = useState(budgetLocalStorage);
  const [remaining, setRemaining] = useState(0);
  const [ShowAllBills, setShowAllBills] = useState([]);

  //useEffect
  useEffect(()=>{
    if(budgetLocalStorage){
      localStorage.setItem('budget', JSON.stringify(budget));
      serShowQuestion(false);
    }else{
      localStorage.setItem('budget', JSON.stringify([]));

    }
    
  }, [budget]);

  //functions 
  const SAbills = s => setShowAllBills(s)

  return (
    <Fragment>
      <div className="container mb-5">
        <div className="row mx-auto">
          <div className="col-12 mt-5 mb-3 text-center text-white">
            <h1>Your budget</h1>
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
                    />
                  </div>)
                  :

                  (

                    <div className='row'>

                      <div className='col-12 p-0 mb-3'>
                        <div className="col-12  text-center text-white bg-primary rounded p-2 mb-2">
                          <h3>Your money <span className='tw-bold'>${budget}</span></h3>
                        </div>
                        <div className="col-12  text-center text-white bg-danger rounded p-2 mt-2">
                          <h3>Now <span className='tw-bold'>${remaining}</span></h3>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 p-0">
                        <Bills
                          ShowAllBills={SAbills}
                          setRemaining={setRemaining}
                        />
                      </div>
                      <div className="col-12 col-md-6 p-0 text-braw ">
                        {
                          ShowAllBills.map(sb => (
                            <ShowBills
                              key={sb.id}
                              bll={sb}
                            />)
                          )
                        }
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
