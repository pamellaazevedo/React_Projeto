import React from 'react'
import './Botao.css'

function Botao(props) {
    let classeBotao = 'botao'

    if (props.desabilitado) {
        classeBotao += ' botao-inativo'
    }
    return (
        <button className={classeBotao}>
            {props.children}
        </button>
    )
}

export default Botao