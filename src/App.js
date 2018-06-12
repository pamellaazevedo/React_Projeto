import React from 'react'
import Navbar from './components/navbar/navbar'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Conta from './pages/Conta/Conta'
import Contato from './pages/Contato/Contato'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { usuario: false }

    this.logaUsuario = this.logaUsuario.bind(this)
    this.deslogaUsuario = this.deslogaUsuario.bind(this)
  }

  logaUsuario() {
    this.setState({ usuario: true })
  }

  deslogaUsuario() {
    this.setState({ usuario: false })
  }

  render() {
    return (
      <div className="app">
        <Navbar 
          usuario={this.state.usuario}
          onSairClick={this.deslogaUsuario}
        />

        <Switch>
          <Route exact path="/" render={props => (
            this.state.usuario ? <Home /> : <Redirect to="/login" />
          )} />

          <Route path="/login" render={props => (
            <Login 
              onEnviarClick={this.logaUsuario} 
              historico={props.history} 
            />
          )} />
          
          <Route path="/conta" component={Conta} />
          <Route path="/contato" component={Contato} />
          <Route path="/quem-somos" component={QuemSomos} />
        </Switch>
      </div>
    );
  }
}

export default App
