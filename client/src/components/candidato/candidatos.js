import React, {Component} from "react";
import ReactTable from "react-table";

function actions() {
    return <div>
        <a href="/g2-rodrigo/concursos" className="badge badge-primary ml-2">Concuros</a>
        <a href="#" className="badge badge-secondary ml-2">Excluir</a>
    </div>
}

const data = [{
    id: 1,
    nome: 'Nome',
    telefone: 'Telefone',
    endereco: 'Endereco',
    cep: '98910-000',
    bairro: 'Centro',
    acoes: actions()
},{
    id: 1,
    nome: 'Nome',
    telefone: 'Telefone',
    endereco: 'Endereco',
    cep: '98910-000',
    bairro: 'Centro',
    acoes: actions()
},{
    id: 1,
    nome: 'Nome',
    telefone: 'Telefone',
    endereco: 'Endereco',
    cep: '98910-000',
    bairro: 'Centro',
    acoes: actions()
},{
    id: 1,
    nome: 'Nome',
    telefone: 'Telefone',
    endereco: 'Endereco',
    cep: '98910-000',
    bairro: 'Centro',
    acoes: actions()
}];

const columns = [{
    Header: 'ID',
    accessor: 'id'
}, {
    Header: 'Nome',
    accessor: 'nome'
}, {
    Header: 'Telefone',
    accessor: 'telefone'
}, {
    Header: 'Endereco',
    accessor: 'endereco'
}, {
    Header: 'CEP',
    accessor: 'cep'
}, {
    Header: 'Bairro',
    accessor: 'bairro'
}, {
    Header: 'Ações',
    accessor: 'acoes',
    filterable: false,
    minWidth: 150
}];

class Candidatos extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Candidatos de todos os concursos</h3>
                <div className="row margin15">
                    <ReactTable
                        data={data}
                        columns={columns}
                        showPagination={false}
                        minRows={0}
                        filterable
                    />
                </div>
            </div>
        );
    }
}

export default Candidatos;