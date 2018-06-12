import React from 'react'
import './Postit.css'

class Postit extends React.Component {
    state = {
        titulo: '',
        texto: '',
        editando: false
    }

    handleFormularioSubmit = e => {
        e.preventDefault()

        //Aqui precisa cadastrar o postit na API
    }

    render() {
        return (
            <form className="postit" onSubmit={this.handleFormularioSubmit}>
                <input area-label="Título" className="postit__titulo" type="text" placeholder="Título..." name="titulo" value={this.state.value} onChange={this.handleChange}/>
                <textarea className="postit__texto" value={this.state.value} placeholder="Digite o texto..." />
                <button area-label="Texto" className="postit__botao-concluir">Concluído</button>
            </form>
        )
    }
}

export default Postit