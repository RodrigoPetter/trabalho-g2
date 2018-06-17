import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import concursoClient from "../../client/concursoClient";
import vagasClient from "../../client/vagasClient";
import cargoClient from "../../client/cargoClient";

let formURL = "vaga/";

class Vagas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            concurso: props.match.params.id,
            concursoDescricao: "",
            loading: true
        };
    }

    componentDidMount() {
        this.setState({data: []});
        vagasClient.getAll(this.state.concurso, vagas => {
            vagas.forEach(vaga => {
                cargoClient.getOne(vaga.cargo_id, cargo => {
                    vaga.cargo_descricao = cargo[0].nome;
                    this.setState(() => {
                        return {data: this.state.data.concat(vaga)};
                    });
                })
            });
        })
            .finally(() => {
                this.setState({loading: false})
            });

        concursoClient.getOne(this.state.concurso, concurso => {
            this.setState({concursoDescricao: concurso[0].descricao});
        })
    }

    delete(event, value) {
        event.preventDefault();
        vagasClient.delete(this.state.concurso, value, () => {
            this.componentDidMount();
        });
    }

    editar(event, value) {
        event.preventDefault();
        this.props.history.push('/concurso/' + this.state.concurso + '/vaga/' + value);
    }

    render() {

        let columns = [{
            Header: 'Cargo',
            accessor: 'cargo_descricao',
            width: getColumnWidth(this.state.data, 'cargo_descricao', 'Cargo')
        }, {
            Header: 'Vagas',
            accessor: 'vagas',
            width: 100
        }, {
            Header: 'Ações',
            accessor: 'cargo_id',
            filterable: false,
            minWidth: 150,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.editar(event, value)
                }} className="badge badge-secondary ml-2">Editar</a>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];
        console.log('render: ', this.state.data.length, this.state);
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Vagas do
                    concurso {this.state.concursoDescricao}</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Adicionar vaga
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


export default Vagas;