import React from 'react'
import Link from '../../components/formulario/link/Link'
import Botao from '../../components/formulario/botao/Botao'
import Grupo from '../../components/formulario/Grupo/Grupo'
import './Login.css'

class FormLogin extends React.Component{

    render(){
        return (
            <div className="form-div">
                <h3>Login</h3>
                <p>Seja Bem vindo(a)! Entre para ver os seus post-it.</p>

                <form className="formulario">
                    <Grupo>
                        <Grupo.Label>Email:</Grupo.Label>
                        <Grupo.Input
                            id='email'
                            type='email'
                            placeholder='Seu email'
                            name='email'
                        />
                    </Grupo>

                    <Grupo>
                    <Grupo.Label>Senha:</Grupo.Label>
                        <Grupo.Input
                            id='senha'
                            type='password'
                            placeholder='Sua senha'
                            name='senha'
                        />
                    </Grupo>
                    <Botao>Entrar</Botao> 
                </form>
                <Link>Criar uma conta</Link>
            </div>
        )
    }
}

export default FormLogin;