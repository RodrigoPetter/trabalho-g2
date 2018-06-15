import React, {Component} from "react";
import ReactTable from "react-table";
import moment from "moment";
import {getColumnWidth} from "../reacttable/tableUtils";
import concursoClient from "../../client/concursoClient";

let formURL = "/concurso/";

class Concursos extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        concursoClient.getAll(json => {
            this.setState({data: json});
        }).finally(() => {
            this.setState({loading: false})
        });
    }

    delete(event, value) {
        event.preventDefault();
        concursoClient.delete(value, (response) => {
            this.componentDidMount();
        });
    }

    editar(event, value) {
        event.preventDefault();
        this.props.history.push('concurso/' + value + '/');
    }

    etapas(event, value) {
        event.preventDefault();
        this.props.history.push('concurso/' + value + '/etapas');
    }

    render() {
        console.log('render: ', this.state.data);
        const columns = [{
            Header: 'ID',
            accessor: 'id'
        }, {
            Header: 'Descrição',
            accessor: 'descricao',
            width: getColumnWidth(this.state.data, 'descricao', 'Descrição')
        }, {
            Header: 'Data',
            id: 'data',
            accessor: d => {
                return moment(d.data, 'YYYY-MM-DD').format('DD/MM/YYYY')
            }
        }, {
            Header: 'Local',
            accessor: 'local',
            width: getColumnWidth(this.state.data, 'descricao', 'Descrição')
        }, {
            Header: 'Etapa atual',
            accessor: 'etapa',
            width: getColumnWidth(this.state.data, 'etapa', 'Etapa atual')
        }, {
            Header: 'Ações',
            accessor: 'id',
            filterable: false,
            minWidth: 190,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.etapas(event, value)
                }} className="badge badge-primary ml-2">Etapas</a>
                <a href="#" onClick={(event) => {
                    this.editar(event, value)
                }} className="badge badge-secondary ml-2">Editar</a>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];

        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Concursos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Novo concurso
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

export default Concursos;