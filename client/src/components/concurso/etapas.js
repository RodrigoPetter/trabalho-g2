import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import concursoClient from "../../client/concursoClient";
import etapaClient from "../../client/etapasClient";
import moment from "moment/moment";

let formURL = "etapa/";

class Etapas extends Component {
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
        etapaClient.getAll(this.state.concurso, etapas => {
            this.setState({data: etapas});
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
        etapaClient.delete(this.state.concurso, value, () => {
            this.componentDidMount();
        });
    }
    novo(event) {
        event.preventDefault();
        this.props.history.push(formURL);
    }
    editar(event, value) {
        event.preventDefault();
        this.props.history.push('/concurso/' + this.state.concurso + '/etapa/' + value);
    }

    candidatos(event, value) {
        event.preventDefault();
        this.props.history.push('/concurso/' + this.state.concurso + '/etapa/' + value + '/candidatos');
    }

    render() {

        let columns = [{
            Header: 'ID',
            accessor: 'id'
        }, {
            Header: 'Descricao',
            accessor: 'descricao',
            width: getColumnWidth(this.state.data, 'descricao', 'Descricao')
        }, {
            Header: 'Tipo',
            id: 'tipo',
            accessor: d => {
                return (d.tipo === "1" ? "Classificatória" : d.tipo === "2" ? "Eliminatória" : "Inscrições")
            },
            width: 190
        }, {
            Header: 'Ações',
            accessor: 'id',
            filterable: false,
            minWidth: 200,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.candidatos(event, value)
                }} className="badge badge-primary ml-2">Candidatos</a>
                <a href="#" onClick={(event) => {
                    this.editar(event, value)
                }} className="badge badge-secondary ml-2">Editar</a>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];
        console.log('render: ', this.state);
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Etapas do
                    concurso {this.state.concursoDescricao}</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={(event)=>{this.novo(event)}}>Adicionar etapa
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


export default Etapas;