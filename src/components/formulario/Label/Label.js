import React from 'react'
import './Label.css'

function Label(props) {
    return (
        <label className="legenda-form">
            {props.children}
        </label>
    )

}

export default Label