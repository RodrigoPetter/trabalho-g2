import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Dashboard</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Concursos</a>
                    <a className="nav-item nav-link" href="#">Departamentos</a>
                    <a className="nav-item nav-link" href="#">Cargos</a>
                    <a className="nav-item nav-link" href="#">Candidatos</a>
                </div>
            </div>
        </nav>;
    }
}

/*<button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>*/

export default Menu;
