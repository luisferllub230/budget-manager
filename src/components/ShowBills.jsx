import React ,{Fragment}from 'react'


const ShowBills = ({bll}) => {

    return (  
        <Fragment>
            <div className="col-12 m-2 text-start text-dark">
                <ul>
                    <li>
                        id: {bll.id} 
                    </li>
                    <li>
                        Name: {bll.billsName}
                    </li>
                    <li>
                        ammon: {bll.ammonBills}
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}
 
export default ShowBills;