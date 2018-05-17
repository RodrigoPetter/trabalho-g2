import React, {Component} from "react";
import ReactTable from "react-table";

let formURL = "concurso/";

function excluir() {
    return <button className='btn btn-secondary'>Excluir</button>;
}

const data = [{
    descricao: 'Concurso 1',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapas: <a href={'#'}>Inscrições</a>,
    acoes: excluir()
}, {
    descricao: 'Concurso 2',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapas: <a href={'#'}>Avaliação Médica</a>,
    acoes: excluir()
}, {
    descricao: 'Concurso 3',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapas: <a href={'#'}>Inscrições</a>,
    acoes: excluir()
}, {
    descricao: 'Concurso 4',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapas: <a href={'#'}>Inscrições</a>,
    acoes: excluir()
}, {
    descricao: 'Concurso 5',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapas: <a href={'#'}>Inscrições</a>,
    acoes: excluir()
}];

const columns = [{
    Header: 'Descrição',
    accessor: 'descricao' // String-based value accessors!
}, {
    Header: 'Data',
    accessor: 'data'
}, {
    Header: 'Local',
    accessor: 'local'
}, {
    Header: 'Etapas',
    accessor: 'etapas',
    filterable: false,
    minWidth: 150
}, {
    Header: 'Ações',
    accessor: 'acoes',
    filterable: false
}];

class Concursos extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Concursos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function(){document.location.href = formURL}}>Novo concurso
                        </button>
                    </div>
                </div>
                <div className="row margin15">
                    <ReactTable
                        data={data}
                        columns={columns}
                        filterable
                    />
                </div>
            </div>
        );
    }
}

export default Concursos;