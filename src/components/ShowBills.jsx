import React, { Fragment } from 'react'


const ShowBills = ({ bll }) => {

    return (
        <Fragment>
            <div className="col-12 mt-2  pe-2 ps-2 text-start text-dark d-flex justify-content-between align-items-end">
                <h5 className=''><span className='fw-bold'>{bll.billsName}:</span></h5>
                <div className='bg-info text-white fw-bold p-2 d-flex justify-content-center shadow'>
                    <h5 className=''>{bll.ammonBills}</h5>
                </div>
            </div>
            <hr className='mt-1' />
        </Fragment>
    );
}

export default ShowBills;