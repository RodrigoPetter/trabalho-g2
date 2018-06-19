import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import inscricaoClient from "../../client/inscricaoClient";
import ConcursoClient from "../../client/concursoClient";
import CargoClient from "../../client/cargoClient";

let formURL = "inscricao/";

class Candidatos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id || '',
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        inscricaoClient.getOne(this.state.id, json => {
            this.setState({data: json});
        }).finally(() => {
            this.setState({loading: false})
        });

        CargoClient.getAll(data => {
            this.setState({cargoData: data});
        });
        ConcursoClient.getAll(data => {
            this.setState({concursoData: data});
        })
    }

    delete(event, value) {
        event.preventDefault();
        inscricaoClient.delete(value, (response) => {
            this.componentDidMount();
        });
    }

    editar(event, value) {
        event.preventDefault();
        this.props.history.push('inscricao/' + value + '/');
    }

    render() {
        console.log('render: ', this.state);
        const columns = [{
            Header: 'Concurso',
            id: 'concurso_cargo_concurso_id',
            accessor: (d) => {
                if (this.state.concursoData) {
                    let a = this.state.concursoData.find(c => c.id === d.concurso_cargo_concurso_id);
                    return a.descricao;
                }
                return "UNDEFINED";
            },
            width: 350
        }, {
            Header: 'Cargo',
            id: 'concurso_cargo_cargo_id',
            accessor: (d) => {
                if (this.state.cargoData) {
                    let a = this.state.cargoData.find(c => c.id === d.concurso_cargo_cargo_id);
                    return a.nome;
                }
                return "UNDEFINED";
            },
            width: 350
        }, {
            Header: 'Ações',
            accessor: 'id',
            filterable: false,
            minWidth: 80,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];

        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Concursos inscritos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Nova inscrição
                        </button>
                    </div>
                </div>
                <div className="row margin15">
                    <ReactTable
                        data={this.state.data}
                        columns={columns}
                        showPagination={false}
                        loading={this.state.loading}
                        minRows={0}
                        filterable
                    />
                </div>
            </div>
        );
    }
}

export default Candidatos;