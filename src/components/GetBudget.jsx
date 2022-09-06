import { Fragment, useState } from 'react'
import Alerts from './Alerts';


const GetBudget = () => {

    //useState
    const [getMoneyTotal, setMoneyTotal] = useState(0);
    const [error, setError] = useState(false);

    //getMoneyTotal
    const onChangeMoney = e => setMoneyTotal(parseInt(e.target.value, 10));

    //validations
    const validateForm = e => {
        e.preventDefault();

        if (getMoneyTotal <= 0 || getMoneyTotal == undefined || isNaN(getMoneyTotal) || getMoneyTotal === "") {
            document.getElementById("money").className = "col-12 mt-3 mb-3 border border-danger  rounded";
            setError(true);
            Alerts('','error','Error :: You cant send a null values or 0').then(()=>console.log('sss'))
        }else{
            document.getElementById("money").className = "col-12 mt-3 mb-3 border border-success  rounded";
            setError(false);
            Alerts('','success','validated data').then(()=>{return;});
        }
    }

    return (
        <Fragment>
            <div className="card col-10 w-75 mx-auto">
                <form
                    onSubmit={validateForm}
                >
                    <div className="card-body text-start text-dark">
                        <h3>What is your budget for this week?</h3>
                        <input
                            onChange={onChangeMoney}
                            type="number"
                            min="0"
                            id="money"
                            className="col-12 mt-3 mb-3 border border-dark  rounded"
                        />
                        <button
                            type="submit"
                            className=" col-12 btn btn-success text-uppercase"
                        >send your budget</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default GetBudget;