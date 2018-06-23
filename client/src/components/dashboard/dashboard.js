import React, {Component} from "react";
import configuration from "../../configuration";

let url = configuration.baseURL + 'Count.php';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concursos: [],
            etapas: [],
            max_inscritos: 100
        };
    }

    componentDidMount() {
        fetch(url + "?target=CONCURSOS").then((response) => {
            response.json().then(json => {
                this.setState({concursos: json});
                this.setState({max_inscritos: Math.max(...json.map(o => o.count))+3});
            });
        });

        fetch(url + "?target=ETAPAS").then((response) => {
            response.json().then(json => {
                this.setState({etapas: json});
            });
        })
    }

    render() {
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Dashboard</h3>
                <div className="row margin15">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Inscritos por concurso</h5>
                                {this.state.concursos.map(c => {
                                    return (
                                        <div>
                                            <label>{c.descricao}</label>
                                            <div className="progress">
                                                <div className="progress-bar bg-success"
                                                     role="progressbar"
                                                     style={{width: ((100 * c.count) / this.state.max_inscritos) + "%"}}
                                                     aria-valuenow={c.count}
                                                     aria-valuemin="0"
                                                     aria-valuemax={this.state.max_inscritos}>{c.count}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Candidatos por etapa</h5>
                                <div className="card">

                                    {this.state.etapas.map(c => {
                                        console.log('etapa: ', c);
                                        return (
                                            <div className="card-body">
                                                <h6>{c.descricao}</h6>
                                                {c.etapas.map(e => {

                                                    return (
                                                        <div>
                                                            <label>{e.descricao}</label>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-success"
                                                                     role="progressbar"
                                                                     style={{width: ((100 * e.count) / this.state.max_inscritos) + "%"}}
                                                                     aria-valuenow={e.count}
                                                                     aria-valuemin="0"
                                                                     aria-valuemax={this.state.max_inscritos}>{e.count}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                                }
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

