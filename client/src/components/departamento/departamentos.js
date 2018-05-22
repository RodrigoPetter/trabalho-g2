import React, {Component} from "react";
import ReactTable from "react-table";

let formURL = "departamento/";

function actions() {
    return <div>
        <a href="#" className="badge badge-primary ml-2">Cargos</a>
        <a href="#" className="badge badge-secondary ml-2">Excluir</a>
    </div>;
}

const getColumnWidth = (rows, accessor, headerText) => {
    const maxWidth = 400;
    const magicSpacing = 10;
    const cellLength = Math.max(
        ...rows.map(row => (`${row[accessor]}` || '').length),
        headerText.length,
    )
    return Math.min(maxWidth, cellLength * magicSpacing)
}

const data = [{
    id: 1,
    nome: 'Recursos Humanos',
    acoes: actions()
}, {
    id: 2,
    nome: 'Unidade de desenvolvimento de sistemas',
    acoes: actions()
}, {
    id: 3,
    nome: 'DEP 3',
    acoes: actions()
}];

const columns = [{
    Header: 'ID',
    accessor: 'id' // String-based value accessors!
}, {
    Header: 'Nome',
    accessor: 'nome',
    width: getColumnWidth(data, 'nome', 'Nome')
}, {
    Header: 'Ações',
    accessor: 'acoes',
    filterable: false,
    minWidth: 150
}];

class Departamentos extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Departamentos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Novo departamento
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


export default Departamentos;