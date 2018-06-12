import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import './Grupo.css'

function Grupo(props) {
    return (
        <div className="grupo">
            {props.children}
        </div>
    )
}

Grupo.Label = Label
Grupo.Input = Input

export default Grupo