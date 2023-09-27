import React from 'react';
import './input-signup.scss';

const Inputsignup = ({ label, halfWidth, ...rest }) => {
    const inputClassName = `input-signup ${halfWidth ? 'half-width' : ''}`;

    return (
        <div className="input-wrapper">
            <p className="label-signup">{label}</p>
            <input className={inputClassName} {...rest} />
        </div>
    );
}

export default Inputsignup;
