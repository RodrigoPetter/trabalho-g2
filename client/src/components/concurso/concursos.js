import React, {Component} from "react";
import ReactTable from "react-table";

let formURL = "/concurso/";

function actions(id) {
    return <div>
        <a href={"concurso/" + id + "/etapas"} className="badge badge-primary ml-2">Etapas</a>
        <a href="#" className="badge badge-secondary ml-2">Excluir</a>
    </div>
}

const data = [{
    id: '1',
    descricao: 'Concurso 1',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapa: 'Inscrições',
    acoes: actions(1)
}, {
    id: '2',
    descricao: 'Concurso 2',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapa: 'Avaliação Médica',
    acoes: actions(1)
}, {
    id: '3',
    descricao: 'Concurso 3',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapa: 'Inscrições',
    acoes: actions(1)
}, {
    id: '4',
    descricao: 'Concurso 4',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapa: 'Inscrições',
    acoes: actions(1)
}, {
    id: '5',
    descricao: 'Concurso 5',
    data: '2018-05-17',
    local: 'Porto Alegre',
    etapa: 'Inscrições',
    acoes: actions(1)
}];

const columns = [{
    Header: 'ID',
    accessor: 'id' // String-based value accessors!
}, {
    Header: 'Descrição',
    accessor: 'descricao' // String-based value accessors!
}, {
    Header: 'Data',
    accessor: 'data'
}, {
    Header: 'Local',
    accessor: 'local'
}, {
    Header: 'Etapa atual',
    accessor: 'etapa',
    minWidth: 150
}, {
    Header: 'Ações',
    accessor: 'acoes',
    filterable: false,
    minWidth: 150
}];

class Concursos extends Component {
    render() {
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

export default Concursos;