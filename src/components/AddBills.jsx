import React, { Fragment, useState, useEffect} from 'react';
import Alerts from './Alerts';
import shortid from 'shortid';

const Bills = ({ShowAllBills, setRemaining}) => {

    //localStore
    let allBillsLocalStore = JSON.parse(localStorage.getItem('bills'));
    let totalMoney = JSON.parse(localStorage.getItem('totalMoney'));

    !totalMoney ? totalMoney = parseInt(JSON.parse(localStorage.getItem('budget'))): parseInt(JSON.parse(localStorage.getItem('totalMoney')));
    !allBillsLocalStore ? allBillsLocalStore = [] : null;

    //useStates
    const [billsName, setBillsName] = useState('');
    const [ammonBills, setAmmonBills] = useState(0);
    const [allBills, setAllBills] = useState(allBillsLocalStore);

    //useEffect
    useEffect(()=>{
        if(allBillsLocalStore){
            const math = totalMoney - ammonBills;
            setRemaining(math);
            localStorage.setItem('totalMoney', math);
            localStorage.setItem('bills', JSON.stringify(allBills));
            setAmmonBills(0);
            ShowAllBills(allBills);
        }else{
            localStorage.setItem('bills', JSON.stringify([]));
        }
    }, [allBills]);
    

    const onSubmit = e => {
        e.preventDefault();

        if(billsName === '' || billsName === undefined || ammonBills <= 0 ||ammonBills === undefined || isNaN(ammonBills)){
            Alerts('', 'error', 'Please check the name or ammon bills');
            return;
        }
        else{
            Alerts('', 'success', 'validated data').then(() => {
                setAllBills([...allBills, { id: shortid.generate(), billsName: billsName, ammonBills: ammonBills}])
                setBillsName('');
            });
        }
    }

    return (
        <Fragment>
            <form
                onSubmit={onSubmit}
            >
                <div className="card-body text-start text-dark">
                    <div className='col-12 text-bold text-primary text-center'>
                        <h3>Add your bills here</h3>
                    </div>
                    <label htmlFor="bills" className='fw-bold'>Bills Name:</label>
                    <input
                        type="text"
                        id="bills"
                        className="col-12 mt-1 mb-3 border border-info  rounded"
                        placeholder='  EJ. foot'
                        onChange={e => setBillsName(e.target.value)}
                        value={billsName}
                    />

                    <label htmlFor="AmmonB" className='fw-bold'>Ammon of Bills:</label>
                    <input
                        type="number"
                        id="AmmonB"
                        min='0'
                        className="col-12 mt-1 mb-3 border border-info  rounded"
                        placeholder='  EJ. $500'
                        onChange={e => setAmmonBills(parseInt(e.target.value, 10))}
                        value={ammonBills}
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

export default Bills;