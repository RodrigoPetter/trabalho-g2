import React, {Component} from "react";
import ReactTable from "react-table";

function actions() {
    return <div>
        <a href="/concursos" className="badge badge-primary ml-2">Concuros</a>
        <a href="#" className="badge badge-secondary ml-2">Excluir</a>
    </div>
}

const data = [{
    candidato: 'Rodrigo',
    cargo: 'Analista',
    nota: '5.5',
    acoes: actions()
},{
    candidato: 'Pedro',
    cargo: 'Analista',
    nota: '10',
    acoes: actions()
},{
    candidato: 'Ana',
    cargo: 'Analista',
    nota: '3',
    acoes: actions()
},{
    candidato: 'Teste',
    cargo: 'Analista',
    nota: '9.9',
    acoes: actions()
},];

const columns = [{
    Header: 'Candidato',
    accessor: 'candidato'
}, {
    Header: 'Cargo',
    accessor: 'cargo'
}, {
    Header: 'Nota',
    accessor: 'nota'
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
                <h3 className="border-bottom border-gray pb-2 mb-0">Candidatos da etapa X do concurso Y</h3>
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