import React, { useEffect, useState } from 'react';
import errorImage from '../../../assets/error.gif';
import errorImage2 from '../../../assets/error2.gif';

const ErrorHandler = props => {
    const [ message, setMessage ] = useState(null)
    useEffect(() => {
        const timer = setTimeout(() => 
        setMessage(<div><img src={props.error1 ? errorImage : errorImage2} alt="error" /> ERROR</div>), 2000);
        return () => clearTimeout(timer)
    }, [props.error1])

    return(<>{message}</>)
}

export default ErrorHandler;