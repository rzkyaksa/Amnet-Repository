import React from 'react';
import './link.scss';

const Link = ({tittle, onClick}) => {
    return (
        <p className="link" onClick={onClick}>
            You don't have an account? <strong>{tittle}</strong></p>
    )
}

export default Link
