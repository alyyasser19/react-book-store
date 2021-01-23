import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertsAPI = ({message}) => {
    const [show, setShow] = useState(true);
    if (show) {
        setTimeout(()=>{setShow(false)},5000)
        return (
            <>
                <Alert show={true} onClose={() => setShow(false)} variant='success'  
                    fade="ture" style={{textAlign : "center", fontSize: "1em"}}>
                    {message}
                    </Alert>
            </>
        )
    }
    return <></>;
}


export default AlertsAPI;