import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Concursos from "./components/concurso/concursos";
import ConcursoForm from "./components/concurso/concursoForm";
import Cargos from "./components/cargo/cargos";
import CargoForm from "./components/cargo/cargoForm";
import Dashboard from "./components/dashboard/dashboard";
import Candidatos from "./components/candidato/candidatos";
import Departamentos from "./components/departamento/departamentos";
import DepartamentoForm from "./components/departamento/departamentoForm";
import DepartamentoCargos from "./components/departamento/departamentoCargos";
import DepartamentoCargoForm from "./components/departamento/departamentoCargoForm";
import Etapas from "./components/concurso/etapas";
import CandidatosEtapa from "./components/concurso/candidatos_etapa";
import EtapaForm from "./components/concurso/etapaForm";

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
                        <Route path="/concurso/:id/etapa/:etapa_id" component={EtapaForm}/>
                        <Route path="/concurso/:id/etapa" component={EtapaForm}/>
                        <Route path="/candidatos-etapa" component={CandidatosEtapa}/>
                        <Route path="/concurso/:id/" component={ConcursoForm}/>
                        <Route path="/concurso" component={ConcursoForm}/>

                        <Route path="/departamentos" component={Departamentos}/>
                        <Route path="/departamento/:id/cargos" component={DepartamentoCargos}/>
                        <Route path="/departamento/:id/cargo" component={DepartamentoCargoForm}/>
                        <Route path="/departamento/:id/" component={DepartamentoForm}/>
                        <Route path="/departamento" component={DepartamentoForm}/>

                        <Route path="/cargos" component={Cargos}/>
                        <Route path="/cargo/:id/" component={CargoForm}/>
                        <Route path="/cargo" component={CargoForm}/>
                        <Route path="/candidatos" component={Candidatos}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
