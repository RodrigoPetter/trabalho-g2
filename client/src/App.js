import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Concursos from "./components/concurso/concursos";
import ConcursoForm from "./components/concurso/concursoForm";
import Cargos from "./components/cargo/cargos";
import Dashboard from "./components/dashboard/dashboard";
import Candidatos from "./components/candidato/candidatos";
import Departamentos from "./components/departamento/departamentos";
import Etapas from "./components/concurso/etapas";
import CandidatosEtapa from "./components/concurso/candidatos_etapa";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <NavLink className="navbar-brand" to="/">Dashboard</NavLink>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-item nav-link" to="/concursos">Concursos</NavLink>
                                <NavLink className="nav-item nav-link" to="/departamentos">Departamentos</NavLink>
                                <NavLink className="nav-item nav-link" to="/cargos">Cargos</NavLink>
                                <NavLink className="nav-item nav-link" to="/candidatos">Candidatos</NavLink>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/concursos" component={Concursos}/>
                        <Route path="/concurso/:id/etapas" component={Etapas}/>
                        <Route path="/candidatos-etapa" component={CandidatosEtapa}/>
                        <Route path="/concurso" component={ConcursoForm}/>
                        <Route path="/departamentos" component={Departamentos}/>
                        <Route path="/cargos" component={Cargos}/>
                        <Route path="/candidatos" component={Candidatos}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
