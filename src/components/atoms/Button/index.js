import React from 'react'
import './button.scss'

const Button = ({tittle, ...rest}) => {
    return (
        <div  className="button-wrapper">
            <button className="button" {...rest}>{tittle}</button>
        </div>
    )
}

export default Button
