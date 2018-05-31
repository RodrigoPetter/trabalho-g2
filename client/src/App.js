import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

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
                        <Link className="navbar-brand" to="/">Dashboard</Link>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/concursos">Concursos</Link>
                                <Link className="nav-item nav-link" to="/departamentos">Departamentos</Link>
                                <Link className="nav-item nav-link" to="/cargos">Cargos</Link>
                                <Link className="nav-item nav-link" to="/candidatos">Candidatos</Link>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/concursos" component={Concursos}/>
                    <Route path="/etapas" component={Etapas}/>
                    <Route path="/candidatos-etapa" component={CandidatosEtapa}/>
                    <Route path="/concurso" component={ConcursoForm}/>
                    <Route path="/departamentos" component={Departamentos}/>
                    <Route path="/cargos" component={Cargos}/>
                    <Route path="/candidatos" component={Candidatos}/>
                </div>
            </Router>
        );
    }
}

export default App;
