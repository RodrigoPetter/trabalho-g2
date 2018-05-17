import React, {Component} from "react";

class Dashboard extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Dashboard</h3>
                <div className="row margin15">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Inscritos por concurso</h5>
                                <label>Concurso 1</label>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "78%"}}
                                         aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78
                                    </div>
                                </div>
                                <label>Concurso 2</label>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "40%"}}
                                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40
                                    </div>
                                </div>
                                <label>Concurso 3</label>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "15%"}}
                                         aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Candidatos por etapa</h5>
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Concurso 1</h6>
                                        <label>Etapa 1</label>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" role="progressbar" style={{width: "40%"}}
                                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40
                                            </div>
                                        </div>
                                        <label>Etapa 2</label>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" role="progressbar" style={{width: "40%"}}
                                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40
                                            </div>
                                        </div>
                                    </div>
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

