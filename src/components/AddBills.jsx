import React, { Fragment, useState } from 'react';
import Alerts from './Alerts';
import shortid from 'shortid';

const Bills = () => {

    const [billsName, setBillsName] = useState('');
    const [ammonBills, setAmmonBills] = useState(0);
    const [allBills, setAllBills] = useState([]);

    const onSubmit = e => {
        e.preventDefault();

        if(billsName === '' || billsName === undefined || ammonBills === undefined || isNaN(ammonBills)){
            Alerts('', 'error', 'Please check the name or ammon bills');
            return;
        }
        else{
            Alerts('', 'success', 'validated data').then(() => {
                setAllBills([...allBills, { id: shortid.generate(), billsName: billsName, ammonBills: ammonBills}])
                setBillsName('');
                setAmmonBills(0);
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
                        max="99999"
                        min="0"
                        id="AmmonB"
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