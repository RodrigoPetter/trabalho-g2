import React, {Component} from "react";
import ReactTable from "react-table";

let formURL = "/g2-rodrigo/etapa/";

function actions() {
    return <div>
        <a href="/g2-rodrigo/candidatos-etapa" className="badge badge-primary ml-2">Candidatos</a>
        <a href="#" className="badge badge-secondary ml-2">Excluir</a>
    </div>
}

const data = [{
    id: '1',
    descricao: 'Etapa 1',
    tipo: 'Eliminatória',
    acoes: actions()
}, {
    id: '2',
    descricao: 'Etapa 2',
    tipo: 'Etapa',
    acoes: actions()
}, {
    id: '3',
    descricao: 'Etapa 3',
    tipo: 'Eliminatória',
    acoes: actions()
}, {
    id: '4',
    descricao: 'Etapa 4',
    tipo: 'Eliminatória',
    acoes: actions()
}];

const columns = [{
    Header: 'ID',
    accessor: 'id'
}, {
    Header: 'Descrição',
    accessor: 'descricao'
}, {
    Header: 'Tipo',
    accessor: 'tipo'
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
                <h3 className="border-bottom border-gray pb-2 mb-0">Etapas do concurso</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Nova etapa
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