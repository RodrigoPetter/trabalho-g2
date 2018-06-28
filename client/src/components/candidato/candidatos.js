import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import candidatoClient from "../../client/candidatoClient";

let formURL = "/candidato/";

class Candidatos extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        candidatoClient.getAll(json => {
            this.setState({data: json});
        }).finally(() => {
            this.setState({loading: false})
        });
    }

    delete(event, value) {
        event.preventDefault();
        candidatoClient.delete(value, (response) => {
            this.componentDidMount();
        });
    }
    novo(event) {
        event.preventDefault();
        this.props.history.push(formURL);
    }
    editar(event, value) {
        event.preventDefault();
        this.props.history.push('candidato/' + value + '/');
    }

    inscricoes(event, value) {
        event.preventDefault();
        this.props.history.push('candidato/' + value + '/inscricoes');
    }

    render() {
        console.log('render: ', this.state.data);
        const columns = [{
            Header: 'ID',
            accessor: 'id'
        }, {
            Header: 'Nome',
            accessor: 'nome',
            width: getColumnWidth(this.state.data, 'nome', 'Nome')
        }, {
            Header: 'Telefone',
            accessor: 'telefone',
            width: getColumnWidth(this.state.data, 'telefone', 'Telefone')
        },{
            Header: 'Endereço',
            accessor: 'endereco',
            width: getColumnWidth(this.state.data, 'endereco', 'Endereco')
        }, {
            Header: 'Bairro',
            accessor: 'bairro',
            width: getColumnWidth(this.state.data, 'bairro', 'Bairro')
        }, {
            Header: 'CEP',
            accessor: 'cep',
            width: getColumnWidth(this.state.data, 'cep', 'CEP')
        }, {
            Header: 'Ações',
            accessor: 'id',
            filterable: false,
            minWidth: 190,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.inscricoes(event, value)
                }} className="badge badge-primary ml-2">Inscricoes</a>
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
                <h3 className="border-bottom border-gray pb-2 mb-0">Candidatos registrados</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={(event)=>{this.novo(event)}}>Novo candidato
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