import React from 'react'
import './Link.css'

function Link(props) {
    return (
        <a className="link">{props.children}</a>
    )
}

export default Link