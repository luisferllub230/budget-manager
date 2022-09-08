import { Fragment, useState } from 'react'
import Alerts from './Alerts';


const GetBudget = ({ setBudget, setRemaining}) => {

    //useState
    const [getMoneyTotal, setMoneyTotal] = useState(0);

    //getMoneyTotal
    const onChangeMoney = e => setMoneyTotal(parseInt(e.target.value, 10));

    //validations
    const validateForm = e => {
        e.preventDefault();

        if (getMoneyTotal <= 0 || getMoneyTotal == undefined || isNaN(getMoneyTotal) || getMoneyTotal === "") {
            document.getElementById("money").className = "col-12 mt-3 mb-3 border border-5 border-danger  rounded";
            Alerts('', 'error', 'Error :: You cant send a null values or 0')
        } else {
            document.getElementById("money").className = "col-12 mt-3 mb-3 border border-5 border-success  rounded";
            Alerts('', 'success', 'validated data').then(() => {
                return (setBudget(getMoneyTotal), setRemaining(getMoneyTotal))
            });
        }
    }

    return (
        <Fragment>
            <form
                onSubmit={validateForm}
            >
                <div className="card-body text-start text-dark">
                    <div className='col-12 text-bold text-primary text-center'>
                        <h3>What is your budget for this week?</h3>
                    </div>
                    <input
                        onChange={onChangeMoney}
                        type="number"
                        id="money"
                        className="col-12 mt-3 mb-3 border border-info  rounded"
                        placeholder='  Ej. $500'
                    />
                    <button
                        type="submit"
                        className=" col-12 btn btn-info fw-bold text-white text-uppercase"
                    >send your budget</button>
                </div>
            </form>
        </Fragment>
    );
}

export default GetBudget;