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
                        <Link className="navbar-brand" to="/g2-rodrigo/">Dashboard</Link>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/g2-rodrigo/concursos">Concursos</Link>
                                <Link className="nav-item nav-link" to="/g2-rodrigo/departamentos">Departamentos</Link>
                                <Link className="nav-item nav-link" to="/g2-rodrigo/cargos">Cargos</Link>
                                <Link className="nav-item nav-link" to="/g2-rodrigo/candidatos">Candidatos</Link>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/g2-rodrigo" component={Dashboard}/>
                    <Route path="/g2-rodrigo/concursos" component={Concursos}/>
                    <Route path="/g2-rodrigo/etapas" component={Etapas}/>
                    <Route path="/g2-rodrigo/candidatos-etapa" component={CandidatosEtapa}/>
                    <Route path="/g2-rodrigo/concurso" component={ConcursoForm}/>
                    <Route path="/g2-rodrigo/departamentos" component={Departamentos}/>
                    <Route path="/g2-rodrigo/cargos" component={Cargos}/>
                    <Route path="/g2-rodrigo/candidatos" component={Candidatos}/>
                </div>
            </Router>
        );
    }
}

export default App;
