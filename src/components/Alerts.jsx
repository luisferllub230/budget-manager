import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Alerts = (type, logo, text) => {

    return(
        Swal.fire(`${text}`, '', `${logo}`)
    )
    
}
 
export default Alerts;